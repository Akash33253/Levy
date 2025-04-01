import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';
import { ScrollView } from 'react-native-gesture-handler';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

const AnimatedBar = ({ category, percentage, color, budget }) => {
    const animatedWidth = useSharedValue(0); // Start from 0%

    useEffect(() => {
        animatedWidth.value = withTiming(percentage, { duration: 1000 }); // Animate to target %
    }, [percentage]);

    const animatedStyle = useAnimatedStyle(() => ({
        width: `${animatedWidth.value}%`, // Convert to percentage width
    }));

    return (
        <View className="flex flex-col  items-center gap-[5px] p-[16px]">
            <View className="flex w-full flex-row items-center justify-between">
                <View className="flex flex-col gap-[8px] items-start">
                    <View className="flex flex-row gap-[7px] border-[1px] border-light-60 p-[8px] rounded-[32px] items-center">
                        <View className="w-[14px] h-[14px] rounded-full" style={{ backgroundColor: color }}></View>
                        <Text className="text-[14px] font-medium pr-[4px]">{category}</Text>
                    </View>
                    <Text className="text-[24px] font-inter-semibold">Remaining &#8377; {budget.expense < budget.budgetAmount ? budget.budgetAmount - budget.expense : 0}</Text>
                </View>
                {
                    budget.expense > budget.budgetAmount && <Image
                        className="h-[32px] w-[32px]"
                        source={require('../../assets/images/warning.png')}
                    />
                }
            </View>
            <View className="w-full h-[12px] rounded-[10px] overflow-hidden bg-light-60">
                <Animated.View className="h-full rounded-[10px]" style={[animatedStyle, { backgroundColor: color }]} />
            </View>
            <View className="w-full">
                <Text className="text-[16px] font-inter-medium text-light-20">&#8377;{budget.expense} of &#8377;{budget.budgetAmount}</Text>
            </View>
            {
                budget.expense > budget.budgetAmount && <View className="w-full">
                    <Text className="text-[14px] font-inter text-red-100">You’ve exceed the limit!
                    </Text>
                </View>
            }
        </View>
    );
};

const AnimatedBudgetChart = ({ budgetList }) => {

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
    const convertToBudgetData = (budgets) => {

        return budgets?.map((budget) => ({
            category: budget.category,
            expense: budget.expense,
            percentage: budget.expense > budget.budgetAmount ? 100 : ((budget.expense / budget.budgetAmount) * 100).toFixed(2), // Calculate percentage
            color: getCategoryColor(budget.category), // Add colors dynamically
            budgetAmount: budget.budgetAmount
        }));
    };
    const budgetData = convertToBudgetData(budgetList);
    return (
        <ScrollView contentContainerStyle={{
            paddingHorizontal: 18
        }}>
            <View className="py-[16px] gap-[24px] flex-col flex">
                {budgetData.map((item, index) => (
                    <AnimatedBar key={index} category={item.category} percentage={item.percentage} color={item.color} budget={item} />
                ))}
            </View>
        </ScrollView>
    );
};


export default AnimatedBudgetChart;