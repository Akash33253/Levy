import React, { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LevyContext from '../../context/LevyContext'

export default function ProfileMenu() {
    const context = useContext(LevyContext);
    const {user} = context
  return (
    <SafeAreaView className="flex-1 bg-[#F6F6F6]">
        <View className="flex flex-col gap-[40px]">
            <View className="flex flex-row items-center px-[25px] mt-[30px] gap-[15px]">
                <View className="w-[80px] h-[80px] bg-light-100 flex items-center justify-center rounded-full">
                    <Image
                    className="w-[70px] h-[70px]"
                    source={require('../../../assets/images/profile.png')}
                    />
                </View>
                <View className="flex flex-col gap-[px]">
                        <Text className="text-light-20 font-medium text-[14px]">Username</Text>
                        <Text className="font-semibold text-dark-75 text-[24px]">{user.name}</Text>
                </View>
            </View>
            <View className="flex flex-col mx-[20px] rounded-2xl bg-light-100">
                <View className="flex flex-row px-[17px] py-[15px]">
                    <Image
                    className="w-[52px] h-[52px]"
                    source={require('../../../assets/images/account.png')}
                    />
                    <Text className="text-dark-25 font-medium text-[16px]">Account</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}
