import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'

export default function SignupScreen({navi}) {
  return (
    <SafeAreaView>
        <TopHeader title={'topheader'}/>
        <Text>Signup</Text>
    </SafeAreaView>
  )
}
