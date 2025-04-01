import React from 'react';
import { Canvas, Circle } from '@shopify/react-native-skia';

const RingWithSegments = () => {

    return (


        <Canvas style={{ flex: 1 }}>
            <Circle cx={10} cy={100} r={50} color="red" />
        </Canvas>




    );
};

export default RingWithSegments;
