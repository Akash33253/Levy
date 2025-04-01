import React, { useState } from 'react';
import { Canvas, Circle, Path, Skia, Text, useFont } from '@shopify/react-native-skia';
import { Pressable, View } from 'react-native';
import { useDerivedValue } from 'react-native-reanimated';

const RingWithSegments = () => {

    const font = useFont(require("../../assets/fonts/Inter_Regular.ttf"), 32);
    const [total,setTotal] = useState(0);
    const radius = 160;
    const stroke_width = 30;
    const outer_stroke_width = 46;
    const gap = 0.04;
    const innerRadius = radius - outer_stroke_width / 2;
    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius)


    const targetText = useDerivedValue(()=>{
        
    });
    console.log(total)
    const generate =async ()=>{
        console.log("incremented")
        const newTotal =total+1;
        setTotal(newTotal);
    }
    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            marginTop: 10,

        }}>
            <Pressable 
            onPress={()=>{generate()}}
            className="w-[30px] h-[30px] bg-blue-600"></Pressable>
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
                <Text text={`${total}`} color={'black'} y={100} x={100} font={font} />
            </Canvas>
        </View>
    );
};

export default RingWithSegments;
