import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'

export default function Home({ navigation }) {
  return (
    <SafeAreaView className="bg-light-100">

      <Text>Home screen</Text>
    </SafeAreaView>
  )
}
