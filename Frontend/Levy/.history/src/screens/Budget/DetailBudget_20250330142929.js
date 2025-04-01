import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Text, View } from 'react-native'
import LevyContext from '../../context/LevyContext'

export default function DetailBudget({navigation,route}) {
  const {budget} = route.params
  console.log(budget)
  const context  = useContext(LevyContext);
  const {categoryData} = context
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <TopHeader navigation={navigation} title={'Detail Budget'} theme={"light"} />
      <View className="flex-1 my-[16px]"> 
          <View className="flex flex-col px-[32px] items-center">
              <View className="p-[16px] border-[1px] border-light-40 rounded-[24px] flex flex-row gap-[8px] items-center">
                <View className="w-[32px] h-[32px] rounded-[8px]">

                </View>
                <Text className="text-[18px] font-inter-semibold">{budget.cate}</Text>
              </View>
          </View>
      </View>
    </SafeAreaView>
  )
}
