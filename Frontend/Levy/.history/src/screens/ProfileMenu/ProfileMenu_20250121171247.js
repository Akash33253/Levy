import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ProfileMenu() {
  return (
    <SafeAreaView className="flex-1 bg-[#F6F6F6]">
        <View className="flex flex-col gap-[40px]">
            <View className="flex flex-row items-center">
                <View className="w-[80px] h-[80px] bg-light-100 flex items-center justify-center">
                    <Image
                    className="w-[70px] h-[70px]"
                    source={require('../../../assets/images/profile.png')}
                    />
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}
