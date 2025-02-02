import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../../components/Footer'
import { Pressable, ScrollView } from 'react-native-gesture-handler'
import DropdownSelect from '../../components/DropDownSelect'
import MonthYearPicker from '../../components/MonthYearPicker'
import { LinearGradient } from 'expo-linear-gradient'
import LevyContext from '../../context/LevyContext'
import { useFocusEffect } from '@react-navigation/native'

export default function Transaction({ navigation }) {
    const context = useContext(LevyContext);
    const { monthlyTotalExpense, getTotalMonthlyExpense, monthlyExpenses, getMonthlyExpenses, categoryData } = context
    const [month, setMonth] = useState(null);
    const monthShortNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const monthNumbers = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12
    };
    const [monthYear, setMonthYear] = useState({
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear().toString()
    })

    useFocusEffect(
        useCallback(() => {
            getMonthlyExpenses(monthYear)
            getTotalMonthlyExpense(monthYear);
        }, [])
    )
    useEffect(() => {
        getMonthlyExpenses(monthYear)
        getTotalMonthlyExpense(monthYear);
    }, [monthYear])

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // Format day and month
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' }); // Jan, Feb, etc.

        // Format time with AM/PM
        const hours = date.getHours() % 12 || 12; // Convert 24-hour to 12-hour format
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

        return `${day} ${month}, ${hours}:${minutes} ${ampm}`;
    };


    return (
        <SafeAreaView className="flex-1 bg-light-100">
            <LinearGradient
                colors={['#FFF6E5', '#FFFFFF', '#FFFFFF', '#FFF6E5']}
                className="flex-1 justify-between"
            >
                <View className="flex-1">
                    <View className="w-full py-[12px] px-[16px] flex flex-row gap-[10px]">
                        <View className="flex w-[140px] flex-row pl-[10px] pr-[26px] py-[8px] rounded-[40px] border-[1px] border-light-60 gap-[3px]">
                            <MonthYearPicker
                                selectedMonthYear={monthYear}
                                onValueChange={setMonthYear}
                            />
                        </View>
                    </View>
                    <View className="flex flex-col w-full items-center justify-center mt-[20px] gap-[9px]">
                        <Text className="text-light-20 text-[14px] font-medium">Total Expense</Text>
                        <Text className="text-dark-75 font-semibold text-[40px]">&#8377; {monthlyTotalExpense}</Text>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: 20,
                            paddingVertical: 10
                        }}
                    >
                        <View className="flex flex-col]">
                            {
                                monthlyExpenses.map((expenses, index) => {
                                    return <View key={index} className="w-full flex flex-col">
                                        <Text className="text-black text-[18px] py-[13px] font-semibold">{expenses[0]}</Text>
                                        {
                                            expenses[1].map((expense) => {
                                                return <Pressable key={expense?._id} className="px-[14px] py-[17px] bg-black rounded-[24px] flex flex-row gap-[9px] w-full items-center">
                                                    
                                                </Pressable>
                                            })
                                        }
                                    </View>
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
                <Footer navigation={navigation} color={"#FFF6E5"} />
            </LinearGradient>
        </SafeAreaView>
    )
}
