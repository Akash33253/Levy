import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ScrollView, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Canvas, Circle } from '@shopify/react-native-skia';

const RingWithSegments = () => {

    return (


        <Canvas style={{ flex: 1 }}>
            <Circle cx={10} cy={100} r={50} color="red" />
        </Canvas>




    );
};

export default RingWithSegments;
