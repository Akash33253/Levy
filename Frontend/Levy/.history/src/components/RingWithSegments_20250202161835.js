import React from 'react';
import { Canvas, Circle, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import { View } from 'react-native';
import { useDerivedValue } from 'react-native-reanimated';

const RingWithSegments = () => {

    const font = useFont(require("../../assets/fonts/Inter_Regular.ttf"), 32);

    if (!font) {
        return <View />; // Wait until the font loads
    }
    const radius = 160;
    const stroke_width = 30;
    const outer_stroke_width = 46;
    const gap = 0.04;
    const innerRadius = radius - outer_stroke_width / 2;
    const totalValue = 100;
    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius)


    const targetText = useDerivedValue(
        () => `$00`,
        []
    )
    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            marginTop: 10,

        }}>
            <Canvas style={{
                flex: 1
            }}>
                <Text x={50} y={100} text="Hello, Skia!" font={font} color="blue" />
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
                <Text text={targetText} color={'black'} y={100} x={100} />
            </Canvas>
        </View>
    );
};

export default RingWithSegments;
