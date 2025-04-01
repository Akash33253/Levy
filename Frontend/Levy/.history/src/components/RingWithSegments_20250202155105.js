import React from 'react';
import { Canvas, Circle } from '@shopify/react-native-skia';

const RingWithSegments = () => {
    const radius = 160;
    const stroke_width = 30;
    
    return (
        <Canvas style={{ flex: 1 }}>
            <Circle cx={100} cy={100} r={50} color="red" />
        </Canvas>
    );
};

export default RingWithSegments;
