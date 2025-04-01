import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import RingWithSegments from '../../components/RingWithSegments'

export default function Report({ navigation }) {
    return (
        <SafeAreaView className="bg-[#FFFFFF] flex-1">
            <TopHeader title={"Financial Report"} navigation={navigation} />
            <View className="flex-1">
                {/* <View className="flex items-center justify-center w-full"> */}
                    <RingWithSegments />
                {/* </View> */}
            </View>
        </SafeAreaView>
    )
}
