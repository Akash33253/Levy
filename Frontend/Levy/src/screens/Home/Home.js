import React, { useCallback, useContext, useEffect } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import LevyContext from '../../context/LevyContext';
import Footer from '../../components/Footer';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation }) {
  const context = useContext(LevyContext);
  const { getRecentExpenses, recentExpenses, categoryData, todayTotalExpense, getTotalTodayExpense ,getExpenseDetail} = context;

  useFocusEffect(
    useCallback(() => {
      getRecentExpenses();
      getTotalTodayExpense();
    }, [])
  );


  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Format day and month
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' }); // Jan, Feb, etc.

    // Format time with AM/PM
    const hours = date.getHours() % 12 || 12; // Convert 24-hour to 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${day} ${month}, ${hours}:${minutes} ${ampm}`;
  };
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
            </View>
            <View className="flex flex-col w-full items-center justify-center mt-[20px] gap-[9px]">
              
              <Text className="text-light-20 text-[14px] font-inter-semibold" >Total Expense</Text>
              <Text className="text-dark-75 font-inter-semibold text-[40px]">&#8377; {todayTotalExpense}</Text>
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
                <Text className="text-light-80 text-[18px] font-inter-medium">Add Expense</Text>
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
                <Text className="text-dark-25 text-[18px] font-inter-semibold">Recent Expenses</Text>
                <Pressable className="px-[16px] py-[7px] rounded-[40px] bg-violet-20" onPress={() => { navigation.navigate("transaction") }}>
                  <Text className="text-violet-100 text-[14px] font-inter-medium">See All</Text>
                </Pressable>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 20,
                  paddingVertical: 10
                }}
              >
                <View className="flex flex-col gap-[8px]">
                  {recentExpenses?.map((expense) => {
                    return <Pressable key={expense?._id}
                      onPress={() => {
                        navigation.navigate('expenseDetail')
                        getExpenseDetail(expense._id)
                      }}
                      className="px-[14px] py-[17px] bg-light-80 rounded-[24px] flex flex-row gap-[9px] w-full items-center">
                      <View
                        style={{
                          backgroundColor: categoryData[expense.category]?.color
                        }}
                        className={`w-[60px] h-[60px] rounded-[16px] flex items-center justify-center`}>
                        <Image
                          className="w-[30px] h-[30px]"
                          source={categoryData[expense.category]?.image}
                        />
                      </View>
                      <View className="flex-1 flex flex-row justify-between">
                        <View className="flex flex-col gap-[13px]">
                          <Text className="text-[16px] font-inter-medium text-dark-25">
                            {expense?.category}
                          </Text>
                          <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            className="w-[110px] text-[13px] font-inter-medium text-light-20">
                            {expense?.description}
                          </Text>
                        </View>
                        <View className="flex flex-col gap-[13px] items-end justify-between">
                          <Text className="text-[16px] font-inter-semibold text-red-100">
                            - &#8377;{expense?.amount}
                          </Text>
                          <Text className="text-[13px] font-inter-medium text-light-20">
                            {formatDate(expense?.date)}
                          </Text>
                        </View>
                      </View>
                    </Pressable>
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
