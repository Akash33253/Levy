import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'

export default function DetailBudget({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-lis">
      <TopHeader navigation={navigation} title={'Detail Budget'} theme={"dark"} />
    </SafeAreaView>
  )
}
