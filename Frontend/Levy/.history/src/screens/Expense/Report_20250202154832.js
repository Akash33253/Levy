import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import RingWithSegments from '../../components/RingWithSegments'
import { Canvas, Circle } from '@shopify/react-native-skia'

export default function Report({ navigation }) {
    return (
        <SafeAreaView className="bg-[#FFFFFF] flex-1">
            <TopHeader title={"Financial Report"} navigation={navigation} />
            <View className="flex-1">
                    <RingWithSegments />
            </View>
        </SafeAreaView>
    )
}
