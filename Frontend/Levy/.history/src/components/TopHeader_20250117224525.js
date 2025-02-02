import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function TopHeader({navigation ,title}) {
  return (
    <View className="p-[16px] flex flex-row items-center relative">
        <Touch className="absolute left-[16px] bg-slate-500"
        onPress={()=>{
            alert("hello")
            navigation.goBack();
        }}>
            <Image
            className="w-[32px] h-[32px]"
            source={require('../../assets/images/arrowLeft.png')}
            />
        </Touch>
        <Text className="text-center w-full font-semibold text-[18px]">{title}</Text>
    </View>
  )
}
