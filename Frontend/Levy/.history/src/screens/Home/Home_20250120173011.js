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
          <View className=" w-full flex flex-row items-center">
            <Text className="text-dark-50 font-medium text-[24px] ">Hi, {user?.name}</Text>
            <Pressable className="ml-auto flex flex-row items-center pl-[10px] pr-[16px] py-[8px] rounded-[40px] border-[1px] border-light-60 gap-[3px]">
              <Image
                className="w-[24px] h-[24px] mt-[4px]"
                source={require("../../../assets/images/arrowDown.png")}
              />
              <Text className="text-dark-50 font-medium text-[14px]">October</Text>
            </Pressable>
          </View>
          <View className="flex flex-col w-full items-center justify-center mt-[12px]">
              <Text className="text-light-20 text-[14px] font-medium">Total Expense</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
