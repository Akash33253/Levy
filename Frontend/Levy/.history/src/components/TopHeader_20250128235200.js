import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'

export default function TopHeader({ navigation, title, theme }) {
    return (
        <View className="p-[16px] flex flex-row items-center relative bg-transparent">
            <Pressable className="absolute left-[16px]"
                onPress={() => {
                    navigation.goBack();
                }}>
                <Image
                    className="w-[32px] h-[32px] back"
                    source={title==='Expense'?require('../../assets/images/arrowLeftWhite.png'):require('../../assets/images/arrowLeft.png')}
                />
            </Pressable>
            <Text 
            style={{
                color : theme==='li'
            }}
            className={`text-center w-full font-semibold text-[18px]`}>{title}</Text>
        </View>
    )
}
