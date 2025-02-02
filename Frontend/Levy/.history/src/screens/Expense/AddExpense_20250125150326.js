import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Text, View } from 'react-native'

export default function AddExpense({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-red-100">
        <TopHeader navigation={navigation} title={'Expense'} />
        <View className="flex-1 flex-col">
            <View className="w-full mt-[60px] px-[26px] gap-[13px]">
                <Text className="text-[18px] font-semibold text-light-80">How Much?</Text>
                
            </View>
        </View>
    </SafeAreaView>
  )
}
