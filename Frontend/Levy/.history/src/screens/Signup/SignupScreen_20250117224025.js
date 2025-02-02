import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'

export default function SignupScreen({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-light-100">
        <TopHeader navigation={navigation} title={'SignUp'}/>
        <Text>Signup</Text>
    </SafeAreaView>
  )
}
