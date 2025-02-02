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
      colors={['#FFF6E5', '#10b981']}  // Blue to Green gradient
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
        Gradient Example
      </Text>
    </LinearGradient>
    </SafeAreaView>
  )
}
