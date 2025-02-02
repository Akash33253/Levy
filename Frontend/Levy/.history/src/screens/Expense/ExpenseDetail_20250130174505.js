import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Text, View } from 'react-native'

export default function ExpenseDetail({ navigation }) {
    return (
        <SafeAreaView className="flex-1 bg-red-100">
            <TopHeader navigation={navigation} title={'Expense Detail'} theme={"dark"} />
            <View className="flex-1 flex flex-col">
                <View className="flex flex-col px-[16px] items-center mt-[16px] mb-[21px] gap-[8px]">
                    <Text className="text-light-80 font-bold text-[48px]">&#8377;1000</Text>
                    <Text className="text-light-80 font-medium text-[13px]">Saturday 4 June 2021  16:20</Text>
                </View>
                <View className="flex-1 w-full bg-white">
                    <View className="w-full h-[50px] bg-red-100 rounded-b-[30px]">
                    </View>
                    <View className="flex-1 bg-white px-[16px] relative">
                        <View className="absolute -top-[30px] left-[16px] flex w-full border-[1px] border-light-60 px-[26px] py-[12px] rounded-[12px]">

                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
