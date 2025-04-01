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
        <View className="flex flex-row" style={styles.barContainer}>
            <Text style={styles.categoryText}>{category}</Text>
            <View style={styles.barBackground}>
                <Animated.View style={[styles.barFill, animatedStyle, { backgroundColor: color }]} />
            </View>
            <Text style={styles.percentageText}>{percentage}%</Text>
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
        <View className="p-[20px]">
            {expenseData.map((item, index) => (
                <AnimatedBar key={index} category={item.category} percentage={item.percentage} color={item.color} />
            ))}
        </View>
    );
};

export default AnimatedBarChart;

const styles = StyleSheet.create({
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    categoryText: {
        width: 80,
        fontSize: 16,
        fontWeight: 'bold',
    },
    barBackground: {
        flex: 1,
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        overflow: 'hidden',
    },
    barFill: {
        height: '100%',
        borderRadius: 10,
    },
    percentageText: {
        width: 50,
        textAlign: 'right',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
