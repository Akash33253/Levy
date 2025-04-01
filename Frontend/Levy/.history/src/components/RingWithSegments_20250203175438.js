import React, { useContext, useState } from 'react';
import { Canvas, Circle, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import { Pressable, View } from 'react-native';
import { useDerivedValue } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';

const RingWithSegments = () => {
    const context = useContext(LevyContext);
    const { monthlyCategoryExpense, monthlyTotalExpense } = context;
    const font = useFont(require("../../assets/fonts/Inter_Regular.ttf"), 32);
    const totalExpense = monthlyTotalExpense.totalExpense;
    const radius = 110;
    const stroke_width = 30;
    const outer_stroke_width = 36;
    const gap = 0.04;
    const innerRadius = radius - outer_stroke_width / 2;
    const categoryData = {
        Food: {
            color: "blue",
            image: require('../../assets/images/foodIcon.png')
        },
        Transport: {
            color: "green",
            image: require('../../assets/images/transportIcon.png')
        },
        Rent: {
            color: "yellow",
            image: require('../../assets/images/rentIcon.png')
        },
        Bill: {
            color: "orange",
            image: require('../../assets/images/billIcon.png')
        },
        Shopping: {
            color: "red",
            image: require('../../assets/images/shoppingIcon.png')
        },
        Investment: {
            color: "purple",
            image: require('../../assets/images/investmentIcon.png')
        },
        Personal: {
            color: "pink",
            image: require('../../assets/images/personalIcon.png')
        },
        Miscellaneous: {
            color: "turquoise",
            image: require('../../assets/images/miscellaneousIcon.png')
        }
    };
    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius)

    const path1 = Skia.Path.Make();
    path1.addCircle(radius, radius, innerRadius);
    let runningSum = 0;
    return (
        <View 
        className="flex w-full bg-white mx-auto"
        style={{
            width: radius * 2,
            height: radius * 2,
            marginTop: 10,
        }}>
            <Canvas style={{
                flex: 1,
            }}>
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
                {
                    monthlyCategoryExpense.map((expense, index) => {
                        if (index !== 0)
                            runningSum += (expense.totalAmount / monthlyTotalExpense);
                        return <Path
                            key={index}
                            path={path1}
                            color={categoryData[expense.category].color}
                            style={'stroke'}
                            strokeWidth={28}
                            strokeJoin={'round'}
                            strokeCap={'round'}
                            start={runningSum  (expense.totalAmount / monthlyTotalExpense)}
                            end={1}
                        />
                    })
                }
            </Canvas>
        </View>
    );
};

export default RingWithSegments;
