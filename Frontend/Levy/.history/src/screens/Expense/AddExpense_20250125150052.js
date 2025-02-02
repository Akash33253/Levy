import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { View } from 'react-native'

export default function AddExpense({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-red-100">
        <TopHeader navigation={navigation} title={'Expense'} />
        <View className="flex-1">

        </View>
    </SafeAreaView>
  )
}
