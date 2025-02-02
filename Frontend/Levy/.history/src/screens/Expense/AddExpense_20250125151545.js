import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function AddExpense({ navigation }) {
  const [fieldData,setFieldData] = useState({
    amount : 0,
    category : "",
    description : "",
    wallet : ""
  })
  return (
    <SafeAreaView className="flex-1 bg-red-100">
      <TopHeader navigation={navigation} title={'Expense'} />
      <View className="flex-1 flex-col gap-[16px]">
        <View className="w-full mt-[60px] px-[26px] gap-[13px]">
          <Text className="text-[18px] font-semibold text-light-60">How Much?</Text>
          <View className="flex flex-row items-center w-full">
            <Text className="text-[64px] text-light-80 font-semibold">&#8377;</Text>
            <TextInput
              className="w-full text-[64px] text-light-80 font-semibold"
              value={fieldData.amount}
              placeholder='0'
              placeholderTextColor={"#FFFFFF"}
              keyboardType='number-pad'
              onChangeText={(text) => {
                setFieldData((fieldData) => ({
                  ...fieldData,
                  ["amount"]: text,
                }))
              }
              }
            ></TextInput>
          </View>
        </View>
        <View className="flex-1 bg-light-80 rounded-t-[32px]">

        </View>
      </View>
    </SafeAreaView>
  )
}
