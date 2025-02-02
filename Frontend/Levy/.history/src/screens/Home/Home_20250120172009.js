import React, { useContext } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';
import LevyContext from '../../context/LevyContext';

export default function Home({ navigation }) {
  const context = useContext(LevyContext);
  const { user } = context;
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <LinearGradient
        colors={['#FFF6E5', '#FFFFFF']}  // Blue to Green gradient
      >
        <View className="w-full p-[20px] relative items-center justify-center flex flex-col">
          <View className="flex flex-row items-center">
            <Text className="text-dark-50 font-medium text-[14px] self-start">Hi {user?.name}</Text>
            <Pressable className="flex flex-row items-center px-[10px] py-[8px] rounded-[40px] border-[1px] border-light-60 gap-[3px]">
              <Image
                className="w-[24px] h-[24px] mt-[4px]"
                source={require("../../../assets/images/arrowDown.png")}
              />
              <Text className="text-dark-50 font-medium text-[14px]">October</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
