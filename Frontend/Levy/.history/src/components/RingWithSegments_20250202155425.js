import React from 'react';
import { Canvas, Circle, Skia } from '@shopify/react-native-skia';
import { View } from 'react-native';

const RingWithSegments = () => {
    const radius = 160;
    const stroke_width = 30;
    const outer_stroke_width = 46;
    const gap = 0.04;


    const path = Skia.Path
    return (
        <View style={{
            width  :radius*2,
            height : radius*2,
            marginTop : 10,

        }}>

        </View>
    );
};

export default RingWithSegments;
