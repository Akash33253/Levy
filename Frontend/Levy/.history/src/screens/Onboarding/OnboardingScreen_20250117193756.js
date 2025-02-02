import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-light-100">
        <View className="flex h-full flex-col justify-between gap-[30px]">
            <View></View>
            <View className="px-[20px] flex flex-col gap-[16px]">
                <Pressable>
                    <View className="w-full bg-violet-100 rounded-[16px] p-[16px]">
                        <Text className="text-center text-light-80 font-semibold text-[20px]">Sign Up</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View className="w-full bg-violet-20 rounded-[16px] p-[16px]">
                        <Text className="text-center text-viol font-semibold text-[20px]">Sign Up</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}
