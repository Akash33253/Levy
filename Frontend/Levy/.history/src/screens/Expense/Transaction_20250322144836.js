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
                {
                    monthlyExpenses?.length==0?'':''
                }

                <Footer navigation={navigation} color={"#FFF6E5"} />
            </LinearGradient>
        </SafeAreaView>
    )
}
