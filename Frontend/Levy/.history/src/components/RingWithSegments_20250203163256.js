import React, { useContext, useEffect } from 'react';
import { Canvas, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import { View } from 'react-native';
import { useSharedValue, withTiming, useDerivedValue } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';

const RingWithSegments = () => {
    const context = useContext(LevyContext);
    const { monthlyCategoryExpense, monthlyTotalExpense } = context;
    const font = useFont(require("../../assets/fonts/Inter_Regular.ttf"), 32);
    
    const totalExpense = monthlyTotalExpense.totalExpense;
    const radius = 110;
    const stroke_width = 30;
    const outer_stroke_width = 36;
    const innerRadius = radius - outer_stroke_width / 2;
    
    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);

    const animatedValue = useSharedValue(0); // Start from 0

    useEffect(() => {
        animatedValue.value = withTiming(totalExpense, { duration: 1000 }); // Animate over 1 second
    }, [totalExpense]);

    // Derived animated text value
    const animatedText = useDerivedValue(() => {
        return Math.round(animatedValue.value).toString(); // Convert animated number to string
    });

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
                    strokeJoin={'round'}
                    strokeCap={'round'}
                    start={0}
                    end={1}
                />

                {/* Animated Text in Center */}
                {font && (
                    <Text
                        text={animatedText}
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
