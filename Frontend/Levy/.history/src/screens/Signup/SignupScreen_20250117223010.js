import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'

export default function SignupScreen({navigation}) {
  return (
    <SafeAreaView className="flex">
        <TopHeader title={'topheader'}/>
        <Text>Signup</Text>
    </SafeAreaView>
  )
}
