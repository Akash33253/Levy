import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function Footer({ navigation }) {
    return (
        <View className="py-[10px] flex flex-row justify-between w-full items-center px-[50px] rounded-t-[30px] bg-white">
            <Pressable className="bg-voil">
                <Text className="text-light-80">+</Text>
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
