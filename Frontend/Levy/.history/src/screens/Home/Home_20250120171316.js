import React, { useContext } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
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
        colors={['#FFF6E5', '#FFFFFF']}  // Blue to Green gradient
      >
        <View className="w-full p-[20px] relative items-center justify-center flex flex-col">
            <Text className="absolute left-[20px] top-[20px]">Hi {user?.name}</Text>
            <View className="flex flex-row items-center px-[16px] py-[8px] rounded-[]">
              <Pressable>
                <Image
                className="w-[24px] h-[24px]"
                source={require("../../../assets/images/arrowDown.png")}
                />
              </Pressable>
                <Text className="text-dark-50 font-medium text-[14px]">October</Text>
            </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
