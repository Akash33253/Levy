import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DetailBudget() {
  return (
    <SafeAreaView className="flex-1 bg-violet-100">
      <TopHeader navigation={navigation} title={'Create Budget'} theme={"dark"} />
    </SafeAreaView>
  )
}
