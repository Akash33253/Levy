import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-light-100">
        <View className="flex h-full flex-col justify-between gap-[30px]">
            <View></View>
            <View className="px-[20px] flex flex-col gap-[20px]">

            </View>
        </View>
    </SafeAreaView>
  )
}
