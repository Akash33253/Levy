import React from 'react';
import { Canvas, Circle } from '@shopify/react-native-skia';

const RingWithSegments = () => {
    const radius = 160;
    const stroke_width = 30;
    const outer_stroke_width = 46;
    const gap = 0.04;
    
    return (
        <Canvas style={{ flex: 1 }}>
            <Circle cx={100} cy={100} r={50} color="red" />
        </Canvas>
    );
};

export default RingWithSegments;
