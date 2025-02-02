import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function TopHeader({title}) {
  return (
    <View className="p-[16px] flex flex-row items-center relative">
        <Pressable className="absolute left-[16px]">
            <Image
            className="w-[32px] h-[32px]"
            source={require('../../assets/images/arrowLeft.png')}
            />
        </Pressable>
        <Text className="text-center w-full font-semibold text-[1]">{title}</Text>
    </View>
  )
}
