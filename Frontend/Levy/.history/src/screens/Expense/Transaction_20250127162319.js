import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../../components/Footer'
import { View } from 'react-native-reanimated/lib/typescript/Animated'

export default function Transaction({navigiation}) {
  return (
    <SafeAreaView className="flex-1 bg-light-100">
        <View className="flex-1">

        </View>
        <Footer/>
    </SafeAreaView>
  )
}
