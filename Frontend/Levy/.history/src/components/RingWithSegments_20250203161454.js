import React, { useContext, useEffect } from 'react';
import { Canvas, Path, Skia } from '@shopify/react-native-skia';
import { View } from 'react-native';
import { useSharedValue, withTiming, useDerivedValue } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';

const RingWithSegments = () => {
    const context = useContext(LevyContext);
    const { monthlyCategoryExpense, monthlyTotalExpense } = context;
    
    const radius = 160;
    const stroke_width = 30;
    const outer_stroke_width = 46;
    const innerRadius = radius - outer_stroke_width / 2;
    const totalExpense = monthlyTotalExpense.totalExpense;
    
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

    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);

    // Shared value for animation
    const animatedProgress = useSharedValue(0);

    useEffect(() => {
        animatedProgress.value = withTiming(1, { duration: 1200 }); // 1.2 sec animation
    }, []);

    // Precompute segment positions
    let runningSum = 0;
    const segmentData = monthlyCategoryExpense.map((expense) => {
        const startAngle = runningSum;
        runningSum += expense.totalAmount / totalExpense;
        return { start: startAngle, end: runningSum, color: categoryData[expense.category].color };
    });

    // Use derived values outside the loop
    const animatedSegments = useDerivedValue(() => 
        segmentData.map(({ start, end }) => ({
            start,
            end: start + (end - start) * animatedProgress.value,
        }))
    );

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

                {/* Animated Expense Segments */}
                {segmentData.map((segment, index) => (
                    <Path
                        key={index}
                        path={path}
                        color={segment.color}
                        style="stroke"
                        strokeWidth={stroke_width}
                        strokeJoin="round"
                        strokeCap="round"
                        start={segment.start}
                        end={animatedSegments.value[index]?.end || segment.start} // Ensure stable rendering
                    />
                ))}
            </Canvas>
        </View>
    );
};

export default RingWithSegments;
