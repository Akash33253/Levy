import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../../components/Footer'
import MonthYearPicker from '../../components/MonthYearPicker'
import { LinearGradient } from 'expo-linear-gradient'
import LevyContext from '../../context/LevyContext'
import { useFocusEffect } from '@react-navigation/native'
import RingWithSegments from '../../components/RingWithSegments'

export default function Transaction({ navigation }) {
    const context = useContext(LevyContext);
    const { monthlyTotalExpense, getTotalMonthlyExpense, monthlyExpenses, getMonthlyExpenses, categoryData, getExpenseDetail ,getTotalMonthlyCategoryExpense} = context

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


    const formattedDate = (inputDate) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        const dateToCheck = new Date(inputDate);

        // Check if it's today
        if (
            dateToCheck.getFullYear() === today.getFullYear() &&
            dateToCheck.getMonth() === today.getMonth() &&
            dateToCheck.getDate() === today.getDate()
        ) {
            return "Today";
        }

        // Check if it's yesterday
        if (
            dateToCheck.getFullYear() === yesterday.getFullYear() &&
            dateToCheck.getMonth() === yesterday.getMonth() &&
            dateToCheck.getDate() === yesterday.getDate()
        ) {
            return "Yesterday";
        }

        // Otherwise, return "DD Mon"
        const day = String(dateToCheck.getDate()).padStart(2, "0");
        const month = months[dateToCheck.getMonth()];
        return `${day} ${month}`;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // Format day and month
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' }); // Jan, Feb, etc.

        // Format time with AM/PM
        const hours = date.getHours() % 12 || 12; // Convert 24-hour to 12-hour format
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

        return `, ${hours}:${minutes} ${ampm}`;
    };


    return (
        <SafeAreaView className="flex-1 bg-light-100">
            <LinearGradient
                colors={['#FFF6E5', '#FFFFFF', '#FFFFFF', '#FFF6E5']}
                className="flex-1 justify-between"
            >
                <View className="flex-1">
                    <View className="p-[20px] w-full flex flex-row items-center justify-between">
                        <Pressable
                            onPress={() => {
                                navigation.navigate("profileMenu")
                            }}
                            className="w-[40px] h-[40px] bg-light-100 rounded-full flex items-center justify-center">
                            <Image
                                className="w-[30px] h-[30px]"
                                source={require('../../../assets/images/profile.png')}
                            />
                        </Pressable>
                        <View className="flex w-[140px] flex-row pl-[10px] pr-[26px] py-[8px] rounded-[40px] border-[1px] border-light-60 gap-[3px]">
                            <MonthYearPicker
                                selectedMonthYear={monthYear}
                                onValueChange={setMonthYear}
                            />
                        </View>
                    </View>
                    <View className="w-full  px-[16px] py-[8px]">
                        <Pressable
                            onPress={() => {
                                getTotalMonthlyCategoryExpense(monthYear);
                                navigation.navigate('report')
                            }}
                            className="bg-[#EEE5FF] px-[16px] py-[8px] rounded-[8px] flex flex-row items-center justify-between">
                            <Text className="text-[16px] text-violet-100 font-inter">See your financial report</Text>
                            <Image
                                className="w-[32px] h-[32px]"
                                source={require('../../../assets/images/arrowRight.png')}
                            />
                        </Pressable>
                    </View>
                    <View className="flex flex-col w-full items-center justify-center mt-[20px] gap-[9px]">
                        <Text className="text-light-20 text-[14px] font-inter-medium">Total Month Expense</Text>
                        <Text className="text-dark-75 font-inter-semibold text-[40px]">&#8377; {monthlyTotalExpense}</Text>
                    </View>
                    {
                        monthlyExpenses?.length>0?"":""
                    }
                    <View>
                    <Text className="text-dark-75 font-inter-medium text-[20px] text-center my-[30px]">Nothing Till now!</Text>
                    </View>
                    
                </View>
                <Footer navigation={navigation} color={"#FFF6E5"} />
            </LinearGradient>
        </SafeAreaView>
    )
}
