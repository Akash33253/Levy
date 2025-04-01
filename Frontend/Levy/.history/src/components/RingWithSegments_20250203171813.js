import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Canvas, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import { useSharedValue, withTiming, useDerivedValue } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';

const RingWithSegments = () => {
    const context = useContext(LevyContext);
    const { monthlyCategoryExpense, setMonthlyCategoryExpense } = context;

    // Font loading
    const font = useFont(require("../../assets/fonts/Inter_Regular.ttf"), 32);

    // Donut chart properties
    const radius = 110;
    const stroke_width = 30;
    const outer_stroke_width = 36;
    const innerRadius = radius - outer_stroke_width / 2;

    // Animated progress value (initially 0, animates to full circle)
    const animatedProgress = useSharedValue(0);

    // Fetch data and calculate total expense
    useEffect(() => {
        const fetchExpenses = async () => {
            setMonthlyCategoryExpense([]); // Clear old data
            const token = await AsyncStorage.getItem("token");
            if (!token) return;

            try {
                const response = await fetch(`http://${ipTemp}:5000/expense/fetchMonthlyCategoryExpense?year=202&month=2`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                });

                const json = await response.json();
                if (json.success) {
                    setMonthlyCategoryExpense(json.monthlyCategoryExpenses);

                    // Calculate total expense
                    const totalExpense = json.monthlyCategoryExpenses.reduce((sum, item) => sum + item.totalAmount, 0);

                    // Animate progress to full
                    animatedProgress.value = withTiming(1, { duration: 1200 });

                    // Set animated total expense
                    animatedTotal.value = withTiming(totalExpense, { duration: 1200 });
                }
            } catch (error) {
                console.error("Error fetching expenses:", error);
            }
        };

        fetchExpenses();
    }, []);

    // Derived animated text value
    const animatedTotal = useSharedValue(0);
    const animatedTotalText = useDerivedValue(() => {
        return Math.round(animatedTotal.value).toString();
    });

    // Path for full circle
    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);

    // Render donut chart
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
                {monthlyCategoryExpense.map((expense, index) => {
                    const startAngle = runningSum;
                    runningSum += (expense.totalAmount / animatedTotal.value);

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
                            end={startAngle + (runningSum - startAngle) * animatedProgress.value}
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
