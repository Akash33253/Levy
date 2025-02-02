import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'

export default function Home({navigation}) {
  return (
    <SafeAreaView> 
      <TopHeader navigation={navigation} title={"Home"}/>
    <Text>Home screen</Text>
    </SafeAreaView>
  )
}
