import React from 'react'
import { Image, Pressable, View } from 'react-native'

export default function Footer({navigation}) {
  return (
    <View className="py-[10px] flex flex-row justify-between w-full">
        <Pressable>
            <Image
            className="w-[32px] h-[32px]"
            source={require('../../assets/images/home.png')}
            />
        </Pressable>
    </View>
  )
}
