import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import RingWithSegments from '../../components/RingWithSegments'
import { Canvas } from '@shopify/react-native-skia'

export default function Report({ navigation }) {
    return (
        <SafeAreaView className="bg-[#FFFFFF] flex-1">
            <TopHeader title={"Financial Report"} navigation={navigation} />
            <View className="flex-1">
                <View className="flex items-center justify-center w-full">
                    <RingWithSegments />
                    <Canvas style={{ flex: 1 }}>
                        <Circle cx={10} cy={100} r={50} color="red" />
                    </Canvas>
                </View>
            </View>
        </SafeAreaView>
    )
}
