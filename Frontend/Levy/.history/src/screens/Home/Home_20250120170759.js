import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';
import LevyContext from '../../context/LevyContext';

export default function Home({ navigation }) {
  const context = useContext(LevyContext);
  const {user} = context;
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <LinearGradient
        colors={['#FFF6E5', '#F8EDD8']}  // Blue to Green gradient
      >
        <View className="w-full p-[16px] relative items-center justify-center flex flex-col">
            <Text className="absolute left-[20px] top-[20px]">Hi {user?.name}</Text>
            <View className="flex flex-row items-center justify-center gap-[10px]">
                <Text>October</Text>
            </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
