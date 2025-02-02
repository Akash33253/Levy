import React, { useContext } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
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
        colors={['#FFF6E5', '#FFFFFF']}
        className="rounded-b-[40px]"
      >
        <View className="w-full p-[20px] relative items-center justify-center flex flex-col rounded-b-[40px]">
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
          <View className="flex flex-col w-full items-center justify-center mt-[20px] gap-[9px]">
            <Text className="text-light-20 text-[14px] font-medium">Total Expense</Text>
            <Text className="text-dark-75 font-semibold text-[40px]">&#8377; 1000</Text>
          </View>
          <Pressable className="mt-[30px] py-[16px] px-[24px] flex flex-row items-center justify-center gap-[8px] bg-red-100 rounded-[28px]">
            <Image
              className="w-[48px] h-[48px]"
              source={require("../../../assets/images/expenseIcon.png")}
            />
            <View className="flex flex-col gap-[3px]">
                <Text className="text-light-80 text-[14px] font-medium">Add Expense</Text>
                <Text className="text-light-80 text-[22px] font-semibold">&#8377; 000</Text>
            </View>
          </Pressable>
        </View>
      </LinearGradient>
      <ScrollView
      showsVerticalScrollIndicator ={false}
      >
        <LinearGradient
         colors={['#FFF6E5', '#FFFFFF']}
         >
          <View>
            
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}
