import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'

export default function SignupScreen({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-light-100">
        <TopHeader navigation={navigation} title={'Sign Up'}/>
        <View className="flex-1 py-[55px] px-[16px]">
            <View className="flex flex-col gap-[24px]">
                <View className="flex px-[12px] py-[16px] w-full border-[]">

                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}
