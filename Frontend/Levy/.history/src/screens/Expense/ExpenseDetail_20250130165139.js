import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Text, View } from 'react-native'

export default function ExpenseDetail({ navigation }) {
    return (
        <SafeAreaView className="flex-1 bg-red-100">
            <TopHeader navigation={navigation} title={'Expense Detail'} theme={"dark"} />
            <View className="flex-1 flex flex-col">
                <View className="flex flex-col px-[16px] items-center mt-[16px] gap-[8px]">
                    <Text className="text-light-80 font-bold text-[48px]">&#8377;1000</Text>
                    <Text className="text-light-80 font-medium text-[13px]">Saturday 4 June 2021  16:20</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
