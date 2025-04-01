import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';

const AnimatedBar = ({ category, percentage, color }) => {
    const animatedWidth = useSharedValue(0); // Start from 0%

    useEffect(() => {
        animatedWidth.value = withTiming(percentage, { duration: 1000 }); // Animate to target %
    }, [percentage]);

    const animatedStyle = useAnimatedStyle(() => ({
        width: `${animatedWidth.value}%`, // Convert to percentage width
    }));

    return (
        <View className="flex flex-col mb-[10px] items-center">
           <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row gap-[7px]">

            </View>
            </View> 
            <Text className="w-[80px] font-bold text-[16px]">{category}</Text>
            <View className="w-full h-[20px] rounded-[10px] overflow-hidden bg-[#e0e0e0]">
                <Animated.View className="h-full rounded-[10px]" style={[animatedStyle, { backgroundColor: color }]} />
            </View>
            <Text className="text-[14px] w-[50px] text-right font-bold" >{percentage}%</Text>
        </View>
    );
};

const AnimatedBarChart = () => {
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
            percentage: ((expense.totalAmount / totalExpense) * 100).toFixed(2), // Calculate percentage
            color: getCategoryColor(expense.category) // Add colors dynamically
        }));
    };
    const expenseData = convertToExpenseData(monthlyCategoryExpense);
    return (
        <View className="p-[16px] gap-[24px] flex-col flex">
            {expenseData.map((item, index) => (
                <AnimatedBar key={index} category={item.category} percentage={item.percentage} color={item.color} />
            ))}
        </View>
    );
};

export default AnimatedBarChart;
