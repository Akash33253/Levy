import React, { useContext, useEffect } from 'react';
import { Canvas, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import { View } from 'react-native';
import { useSharedValue, withTiming, useDerivedValue } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';

const RingWithSegments = () => {
    const context = useContext(LevyContext);
    const { monthlyCategoryExpense, monthlyTotalExpense } = context;
    const font = useFont(require("../../assets/fonts/Inter_Regular.ttf"), 32);

    // Ensure totalExpense is valid before rendering
    const totalExpense = monthlyTotalExpense?.totalExpense;

    if (totalExpense === undefined || totalExpense === 0) {
        return <View style={{ width: 220, height: 220, justifyContent: 'center', alignItems: 'center' }}><Text text="Loading..." color="black" x={50} y={100} /></View>;
    }

    const radius = 110;
    const stroke_width = 30;
    const outer_stroke_width = 36;
    const innerRadius = radius - outer_stroke_width / 2;

    // Category colors
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

    // Animated value for text
    const animatedValue = useSharedValue(0);

    useEffect(() => {
        animatedValue.value = withTiming(totalExpense, { duration: 1000 });
    }, [totalExpense]);

    // Derived animated text
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

                {/* Expense Segments */}
                {monthlyCategoryExpense.map((expense, index) => {
                    if (!expense.totalAmount || !categoryData[expense.category]) return null; // Skip invalid data

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
