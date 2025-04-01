import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DetailBudget({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-violet-100">
      <TopHeader navigation={navigation} title={'Detail Budget'} theme={"dark"} />
    </SafeAreaView>
  )
}
