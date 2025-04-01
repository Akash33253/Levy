import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';
import { ScrollView } from 'react-native-gesture-handler';

const AnimatedBar = ({ category, percentage, color, amount }) => {
    const animatedWidth = useSharedValue(0); // Start from 0%

    useEffect(() => {
        animatedWidth.value = withTiming(percentage, { duration: 1000 }); // Animate to target %
    }, [percentage]);

    const animatedStyle = useAnimatedStyle(() => ({
        width: `${animatedWidth.value}%`, // Convert to percentage width
    }));

    return (
        <View className="flex flex-col  items-center gap-[5px]">
            <View className="flex w-full flex-row items-center justify-between">
                <View className="flex flex-row gap-[7px] border-[1px] border-light-60 p-[8px] rounded-[32px] items-center">
                    <View className="w-[14px] h-[14px] rounded-full" style={{ backgroundColor: color }}></View>
                    <Text className="text-[14px] font-medium pr-[4px]">{category}</Text>
                </View>
                <Text className="text-[24px] font-medium text-red-100">- &#8377;{amount}</Text>
            </View>
            <View className="w-full h-[12px] rounded-[10px] overflow-hidden bg-light-60">
                <Animated.View className="h-full rounded-[10px]" style={[animatedStyle, { backgroundColor: color }]} />
            </View>
        </View>
    );
};

const AnimatedBudgetChart = () => {
    const context = useContext(LevyContext);
    const { monthlyCategoryExpense } = context;


    const getCategoryColor = (category) => {
        const colorMap = {
            Food: 'blue',
            Transport: 'green',
            Rent: 'yellow',
            Bill: 'orange',
            Shopping: 'red',
            Investment: 'purple',
            Personal: 'pink',
            Miscellaneous: 'turquoise'
        };
        return colorMap[category] || 'gray'; // Default to gray if no color found
    };
    const convertToExpenseData = (expenses) => {
        const totalExpense = expenses.reduce((sum, item) => sum + item.totalAmount, 0);

        return expenses.map((expense) => ({
            category: expense.category,
            amount: expense.totalAmount,
            percentage: ((expense.totalAmount / totalExpense) * 100).toFixed(2), // Calculate percentage
            color: getCategoryColor(expense.category) // Add colors dynamically
        }));
    };
    const expenseData = convertToExpenseData(monthlyCategoryExpense);
    return (
        <ScrollView contentContainerStyle={{
            paddingHorizontal : 18
        }}>
            <View className="py-[16px] gap-[24px] flex-col flex">
                {expenseData.map((item, index) => (
                    <AnimatedBar key={index} category={item.category} percentage={item.percentage} color={item.color} amount={item.amount} />
                ))}
            </View>
        </ScrollView>
    );
};


export default ani