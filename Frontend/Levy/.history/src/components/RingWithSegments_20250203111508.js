import React, { useContext, useState } from 'react';
import { Canvas, Circle, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import { Pressable, View } from 'react-native';
import { useDerivedValue } from 'react-native-reanimated';
import LevyContext from '../context/LevyContext';

const RingWithSegments = () => {
    const context = useContext(LevyContext);
    const { monthlyCategoryExpense, categoryData, monthlyTotalExpense } = context;
    const font = useFont(require("../../assets/fonts/Inter_Regular.ttf"), 32);
    const totalExpense = monthlyTotalExpense.totalExpense;
    const radius = 160;
    const stroke_width = 30;
    const outer_stroke_width = 46;
    const gap = 0.04;
    const innerRadius = radius - outer_stroke_width / 2;
    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius)

    const path1 = Skia.Path.Make();
    path1.addCircle(radius, radius, innerRadius);


    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            marginTop: 10,

        }}>
            <Canvas style={{
                flex: 1
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
                        return <Path
                        key={}
                            path={path1}
                            color={'red'}
                            style={'stroke'}
                            strokeWidth={30}
                            strokeJoin={'round'}
                            strokeCap={'round'}
                            start={0}
                        />
                    })
                }
                {/* <Text text={`${total}`} color={'black'} y={100} x={100} font={font} /> */}
            </Canvas>
        </View>
    );
};

export default RingWithSegments;
