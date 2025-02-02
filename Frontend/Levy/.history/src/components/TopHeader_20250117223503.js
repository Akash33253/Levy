import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function TopHeader({title}) {
  return (
    <View className="p-[16px]">
        <Pressable>
            <Image
            className="w-[32px] h-[32]"
            source={require('../../assets/images/arrowLeft.png')}
            />
        </Pressable>
        <Text>{title}</Text>
    </View>
  )
}
