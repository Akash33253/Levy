import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Canvas, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import { useSharedValue, withTiming, useDerivedValue } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';

const RingWithSegments = () => {
    const context = useContext(LevyContext);
    const { monthlyCategoryExpense, setMonthlyCategoryExpense ,categoryData} = context;

    const font = useFont(require("../../assets/fonts/Inter_Regular.ttf"), 32);
    const radius = 110;
    const stroke_width = 30;
    const outer_stroke_width = 36;
    const innerRadius = radius - outer_stroke_width / 2;

    // Animated values
    const animatedProgress = useSharedValue(0);
    const animatedTotal = useSharedValue(1); // Default to 1 to prevent division by zero

    // Fetch API Data
    useEffect(() => {
        const fetchExpenses = async () => {
            const token = await AsyncStorage.getItem("token");
            if (!token) return;

            try {
                const response = await fetch(`http://${ipTemp}:5000/expense/fetchMonthlyCategoryExpense?year=2024&month=2`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                });

                const json = await response.json();
                if (json.success) {
                    setMonthlyCategoryExpense(json.monthlyCategoryExpenses);

                    // Calculate total expense safely
                    const totalExpense = json.monthlyCategoryExpenses
                        .filter(item => item.totalAmount) // Remove invalid values
                        .reduce((sum, item) => sum + item.totalAmount, 0);
                    // Prevent division by zero
                    if (totalExpense > 0) {
                       
                        animatedTotal.value = withTiming(totalExpense, { duration: 1200 });
                        animatedProgress.value = withTiming(1, { duration: 1200 });
                    }
                }
            } catch (error) {
                console.error("Error fetching expenses:", error);
            }
        };

        fetchExpenses();
    }, []);

    // Animated text for total expense
    const animatedTotalText = useDerivedValue(() => {
        return Math.round(animatedTotal.value).toString();
    });

    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);

    let runningSum = 0;

    return (
        <View style={{ width: radius * 2, height: radius * 2, marginTop: 10 }}>
            <Canvas style={{ flex: 1 }}>
                {/* Background Circle */}
                <Path
                    path={path}
                    color={"#f4f7fc"}
                    style="stroke"
                    strokeWidth={outer_stroke_width}
                    strokeJoin="round"
                    strokeCap="round"
                    start={0}
                    end={1}
                />

                {/* Expense Segments */}
                {monthlyCategoryExpense
                    .filter(expense => expense.totalAmount > 0) // Ensure valid amounts
                    .map((expense, index) => {
                        const startAngle = runningSum;
                        runningSum += expense.totalAmount / Math.max(animatedTotal.value, 1); // Prevent division by zero

                        return (
                            <Path
                                key={index}
                                path={path}
                                color={categoryData[expense.category]?.color || "gray"}
                                style="stroke"
                                strokeWidth={28}
                                strokeJoin="round"
                                strokeCap="round"
                                start={startAngle}
                                end={Math.min(startAngle + (runningSum - startAngle) * animatedProgress.value, 1)} // Prevent NaN
                            />
                        );
                    })}

                {/* Animated Center Text */}
                {font && (
                    <Text
                        text={animatedTotalText.value}
                        color={'black'}
                        x={radius - 20}
                        y={radius + 10}
                        font={font}
                    />
                )}
            </Canvas>
        </View>
    );
};

export default RingWithSegments;
