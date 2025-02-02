import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'

export default function TopHeader({navigation ,title}) {
  return (
    <View className="p-[16px] flex flex-row items-center relative ">
        <Pressable className="absolute left-[16px]"
        onPress={()=>{
            navigation.goBack();
        }}>
            <Image
            className="w-[32px] h-[32px]"
            source={require('../../assets/images/arrowLeft.png')}
            />
        </Pressable>
        <Text className="text-center w-full font-semibold text-[18px]">{title}</Text>
    </View>
  )
}
