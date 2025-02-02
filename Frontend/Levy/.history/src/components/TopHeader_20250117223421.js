import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function TopHeader({title}) {
  return (
    <View className="p-[16px]">
        <Pressable>
            <Image
            source={}
            />
        </Pressable>
        <Text>{title}</Text>
    </View>
  )
}
