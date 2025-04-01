import React from 'react';
import { Canvas, Circle, Path, Skia } from '@shopify/react-native-skia';
import { View } from 'react-native';
import { useDerivedValue } from 'react-native-reanimated';

const RingWithSegments = () => {
    const radius = 160;
    const stroke_width = 30;
    const outer_stroke_width = 46;
    const gap = 0.04;
    const innerRadius = radius-outer_stroke_width/2;
    const totalValue = 100;
    const path = Skia.Path.Make();
    path.addCircle(radius,radius,innerRadius)

    const targetText = useDerivedValue(
        ()=>`$${Math.round(totalValue)}`,
        
    )
    return (
        <View style={{
            width  :radius*2,
            height : radius*2,
            marginTop : 10,

        }}>
            <Canvas style={{
                flex :1
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
            </Canvas>
        </View>
    );
};

export default RingWithSegments;
