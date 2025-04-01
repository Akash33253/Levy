import React, { useContext, useEffect } from 'react';
import { Canvas, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import { View } from 'react-native';
import { useSharedValue, withTiming, useDerivedValue } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';

const RingWithSegments = () => {
    const context = useContext(LevyContext);
    const { monthlyCategoryExpense, monthlyTotalExpense } = context;
    const font = useFont(require("../../assets/fonts/Inter_Regular.ttf"), 32);

    const radius = 110;
    const stroke_width = 30;
    const outer_stroke_width = 36;
    const innerRadius = radius - outer_stroke_width / 2;
    
    // Ensure totalExpense is not undefined or zero
    const totalExpense = monthlyTotalExpense?.totalExpense || 1; // Avoid division by 0

    // Define category colors
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

    // Animated value for center text
    const animatedValue = useSharedValue(0);

    useEffect(() => {
        animatedValue.value = withTiming(totalExpense, { duration: 1000 });
    }, [totalExpense]);

    // Convert animated value to text
    const animatedText = useDerivedValue(() => {
        return Math.round(animatedValue.value).toString();
    });

    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);

    let runningSum = 0;
    
    return (
        <View 
            className="flex w-full bg-white mx-auto"
            style={{ width: radius * 2, height: radius * 2, marginTop: 10 }}
        >
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

                {/* Render Expense Segments */}
                {monthlyCategoryExpense.map((expense, index) => {
                    if (!expense.totalAmount || !categoryData[expense.category]) return null; // Prevent errors

                    const startAngle = runningSum;
                    runningSum += expense.totalAmount / totalExpense;

                    return (
                        <Path
                            key={index}
                            path={path}
                            color={categoryData[expense.category].color}
                            style="stroke"
                            strokeWidth={stroke_width}
                            strokeJoin="round"
                            strokeCap="round"
                            start={startAngle}
                            end={runningSum}
                        />
                    );
                })}

                {/* Animated Center Text */}
                {font && (
                    <Text
                        text={animatedText.value}
                        color={'black'}
                        x={radius - 20} // Center text horizontally
                        y={radius + 10} // Center text vertically
                        font={font}
                    />
                )}
            </Canvas>
        </View>
    );
};

export default RingWithSegments;
