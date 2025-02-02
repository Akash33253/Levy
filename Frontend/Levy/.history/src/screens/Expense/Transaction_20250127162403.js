import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../../components/Footer'

export default function Transaction({navigiation}) {
  return (
    <SafeAreaView className="flex-1 bg-light-100">
        <View className="flex-1">

        </View>
        <Footer navigation={navigation} color={"#FFF6E5"}/>
    </SafeAreaView>
  )
}
