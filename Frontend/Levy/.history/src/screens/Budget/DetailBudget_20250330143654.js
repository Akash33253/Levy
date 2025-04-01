import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Image, Text, View } from 'react-native'
import LevyContext from '../../context/LevyContext'

export default function DetailBudget({ navigation, route }) {
  const { budget } = route.params
  console.log(budget)
  const context = useContext(LevyContext);
  const { categoryData } = context
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <TopHeader navigation={navigation} title={'Detail Budget'} theme={"light"} />
      <View className="flex-1 my-[16px]">
        <View className="flex flex-col px-[32px] items-center gap-[32px]">
          <View className="p-[16px] border-[1px] border-light-40 rounded-[24px] flex flex-row gap-[8px] items-center">
            <View
              style={{
                backgroundColor: categoryData[budget.category]?.color
              }}
              className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center">
              <Image
                className="w-[18px] h-[18px]"
                source={categoryData[budget.category]?.image}
              />
            </View>
            <Text className="text-[18px] font-inter-semibold">{budget.category}</Text>
          </View>
          <View className="flex flex-col gap-[4px] items-center">
              <Text className="text-[24px] font-inter-semibold">Remaining</Text>
              <Text className="text-[64px] text-center font-inter-semibold">&#8377;{budget.expense>budget.}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
