import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Text, View } from 'react-native'

export default function ExpenseDetail({ navigation }) {
    return (
        <SafeAreaView className="flex-1 bg-red-100">
            <TopHeader navigation={navigation} title={'Expense Detail'} theme={"dark"} />
            <View className="flex-1 flex flex-col">
                <View className="flex flex-col px-[16px] items-center">
                    <Text className="text-dark-75 font-bol text-[40px]">&#8377; 1000</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
