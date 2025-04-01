import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, Text, View } from 'react-native'
import LevyContext from '../../context/LevyContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Footer from '../../components/Footer'
import MonthYearPicker from '../../components/MonthYearPicker'
import { useFocusEffect } from '@react-navigation/native'
import AnimatedBudgetChart from '../../components/AnimatedBudgetChart'

export default function Budget({ navigation }) {
    const context = useContext(LevyContext);
    const { ipTemp } = context;
    const [monthYear, setMonthYear] = useState({
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear().toString()
    })
    const [budgetList, setBudgetList] = useState([]);

    const processBudgetAndExpenses = (budget, expenses) => {
        // Convert budget array into an object for quick lookup, storing amount & _id
        const budgetMap = budget.reduce((acc, item) => {
            acc[item.category] = { amount: item.amount, id: item._id };
            return acc;
        }, {});
    
        // Filter only expenses that have a corresponding budget entry and map required fields
        const mergedData = expenses
            .filter(expense => budgetMap[expense.category] !== undefined) // Ensure category exists in budget
            .map(expense => ({
                category: expense.category,
                expense: expense.totalAmount,
                budgetAmount: budgetMap[expense.category].amount, // Get budget amount
                budgetId: budgetMap[expense.category].id // Get budget _id
            }));
    
        return mergedData;
    };



    useFocusEffect(
        useCallback(() => {
            getMonthlyBudget(monthYear);
        }, [])
    )
    useEffect(() => {
        getMonthlyBudget(monthYear);
    }, [monthYear])


    const getMonthlyBudget = async (params) => {
        try {
            const token = await AsyncStorage.getItem("token");
            const month = params.month.toString();
            const year = params.year.toString()
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/budget/fetchBudgetWithExpenses?year=${year}&month=${month}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success && json.budgetId) {
                    const result = processBudgetAndExpenses(json.budget, json.expenses,json.);
                    setBudgetList(result);
                }
            }
        } catch (error) {
            console.log(error);
            alert("Some error occured");
        }
    }
    return (
        <SafeAreaView className="flex-1 bg-violet-100">
            <View className="w-full flex flex-row items-center justify-center py-[32px]">
                <View className="flex w-[140px] flex-row pl-[10px] pr-[26px] py-[8px] rounded-[40px] border-[1px] border-light-60 gap-[3px] bg-white">
                    <MonthYearPicker
                        selectedMonthYear={monthYear}
                        onValueChange={setMonthYear}
                    />
                </View>
            </View>
            <View className="flex-1 bg-white rounded-t-[32px]">
                <View className="flex-1">
                    <View className="flex-1">
                        {
                            budgetList.length > 0 ? <AnimatedBudgetChart budgetList={budgetList} /> :
                                <View className="flex-1 flex items-center justify-center px-[63px]">
                                    <Text className="text-center text-light-20 font-inter-medium text-[16px]">You don't have a budget</Text>
                                    <Text className="text-center text-light-20 font-inter-medium text-[16px]">Let's make one so you in control</Text>
                                </View>
                        }
                    </View>
                    <View className="w-full px-[16px] py-[28px]">
                        <Pressable
                            onPress={() => { navigation.navigate('addBudget', { year: monthYear.year, month: monthYear.month }) }}
                        >
                            <View className="w-full bg-violet-100 rounded-[16px] p-[18px]">
                                <Text className="text-center text-light-80 font-inter-semibold text-[18px]">Create a Budget</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <Footer navigation={navigation} color={"#FFFFFF"} />
            </View>
        </SafeAreaView>
    )
}


