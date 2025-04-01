import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Canvas, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import { useSharedValue, withTiming, useDerivedValue } from 'react-native-reanimated';

const categoryData = {
    Food: { color: "blue" },
    Transport: { color: "green" },
    Rent: { color: "yellow" },
    Bill: { color: "orange" },
    Shopping: { color: "red" },
    Investment: { color: "purple" },
    Personal: { color: "pink" },
    Miscellaneous: { color: "turquoise" }
};

// Generate random expense data
const generateRandomExpenses = () => {
    return Object.keys(categoryData).map(category => ({
        category,
        totalAmount: Math.floor(Math.random() * 500) + 100 // Random amount between 100-600
    }));
};

const RingWithSegments = () => {
    const font = useFont(require("../../assets/fonts/Inter_Regular.ttf"), 32);
    
    const radius = 110;
    const stroke_width = 30;
    const outer_stroke_width = 36;
    const innerRadius = radius - outer_stroke_width / 2;
    
    // Randomized expense data
    const expenses = generateRandomExpenses();
    const totalExpense = expenses.reduce((sum, item) => sum + item.totalAmount, 0);

    // Animated values
    const animatedProgress = useSharedValue(0);
    const animatedTotal = useSharedValue(0);

    useEffect(() => {
        animatedProgress.value = withTiming(1, { duration: 1200 });
        animatedTotal.value = withTiming(totalExpense, { duration: 1200 });
    }, []);

    // Derived value for animated text
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
                {expenses.map((expense, index) => {
                    const startAngle = runningSum;
                    runningSum += expense.totalAmount / totalExpense;

                    return (
                        <Path
                            key={index}
                            path={path}
                            color={categoryData[expense.category].color}
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
