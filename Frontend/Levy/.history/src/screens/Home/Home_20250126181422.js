import React, { useCallback, useContext, useEffect } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import LevyContext from '../../context/LevyContext';
import Footer from '../../components/Footer';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation }) {
  const context = useContext(LevyContext);
  const { getRecentExpenses, recentExpenses } = context;

  useFocusEffect(
    useCallback(() => {
      getRecentExpenses();
    }, [])
  );
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <View className="flex-1">
        <LinearGradient
          colors={['#FFF6E5', '#FFFFFF']}
          className="rounded-b-[40px]"
        >
          <View className="w-full p-[20px] relative items-center justify-center flex flex-col rounded-b-[40px]">
            <View className=" w-full flex flex-row items-center">
              <Pressable
                onPress={() => {
                  navigation.navigate("profileMenu")
                }}
                className="w-[40px] h-[40px] bg-light-100 rounded-full flex items-center justify-center">
                <Image
                  className="w-[30px] h-[30px]"
                  source={require('../../../assets/images/profile.png')}
                />
              </Pressable>
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
            <Pressable
              onPress={() => {
                navigation.navigate("addExpense")
              }}
              className="mt-[30px] py-[16px] px-[24px] flex flex-row items-center justify-center gap-[8px] bg-red-100 rounded-[28px]">
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
        <View className="flex-1 mt-[40px]">
          <LinearGradient
            colors={['#FFFFFF', '#FFF6E5']}
            className="flex-1 justify-between"
          >
            <View className="flex-1 flex flex-col gap-[8px]">
              <View className="w-full px-[16px] flex flex-row justify-between items-center">
                <Text className="text-dark-25 text-[18px] font-semibold">Recent Expenses</Text>
                <Pressable className="px-[16px] py-[7px] rounded-[40px] bg-violet-20">
                  <Text className="text-violet-100 text-[14px] font-medium">See All</Text>
                </Pressable>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 20,
                  paddingVertical : 10
                }}
              >
                <View className="flex flex-col gap-[8px]">
                  {recentExpenses?.map((expense) => {
                    return <View className="px-[14px] py-[17px] bg-light-80 rounded-[24px] flex flex-row gap-[9px] w-full">
                      
                      
                    </View>
                  })}
                </View>
              </ScrollView>
            </View>
            <Footer navigation={navigation} color={"#FFF6E5"} />
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  )
}
