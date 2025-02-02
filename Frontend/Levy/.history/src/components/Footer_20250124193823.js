import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function Footer({ navigation }) {
    return (
        <View className="py-[10px] flex flex-row justify-between w-full items-center px-[50px] rounded-t-[30px] bg-white">
            <Pressable className="absolute top-[-50%] left-[60] bg-violet-100 w-[56px] h-[56px] flex items-center justify-center rounded-full">
                <Image
                className="w-[27px] h-[27px]"
                source={require('../../assets/images/plus.png')}
                />
            </Pressable>
            <Pressable className="flex flex-col gap-[4px] items-center">
                <Image
                    className="w-[32px] h-[32px]"
                    source={require('../../assets/images/home.png')}
                />
                <Text className="text-[10px] text-[#C6C6C6] font-medium">Home</Text>
            </Pressable>
            <Pressable className="flex flex-col gap-[4px] items-center">
                <Image
                    className="w-[32px] h-[32px]"
                    source={require('../../assets/images/user.png')}
                />
                <Text className="text-[10px] text-[#C6C6C6] font-medium">Profile</Text>
            </Pressable>
        </View>
    )
}
