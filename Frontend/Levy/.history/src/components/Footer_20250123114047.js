import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function Footer({ navigation }) {
    return (
        <View className="py-[10px] flex flex-row justify-between w-full items-center">
            <Pressable className="flex flex-col gap-[4px] items-center">
                <Image
                    className="w-[32px] h-[32px]"
                    source={require('../../assets/images/home.png')}
                />
                <Text className="text-[10px] text-[]">Home</Text>
            </Pressable>
        </View>
    )
}
