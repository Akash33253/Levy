import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { View } from 'react-native'

export default function DetailBudget({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <TopHeader navigation={navigation} title={'Detail Budget'} theme={"light"} />
      <View className="flex-1 my-[16px]"> 

      </View>
    </SafeAreaView>
  )
}
