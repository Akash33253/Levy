import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <LinearGradient
        colors={['#FFF6E5', '#F8EDD8']}  // Blue to Green gradient
      >
        <View className="w-full relative items-center justify-center flex flex-col">

        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
