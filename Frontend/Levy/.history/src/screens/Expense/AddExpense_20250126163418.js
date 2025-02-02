import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Pressable, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import SelectDropdown from 'react-native-select-dropdown'
import DropdownSelect from '../../components/DropDownSelect'

export default function AddExpense({ navigation }) {
  const [fieldData, setFieldData] = useState({
    amount: 0,
    category: "",
    description: "",
    wallet: ""
  })
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const categoryList = ["category1", "category2"];
  const walletList = ["wallet1", "wallet2"];
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
        <View className="flex-1 bg-light-80 rounded-t-[32px] flex-col flex justify-between">
          <View className="flex flex-col py-[24px] px-[16px] gap-[16px]">
            <View
              className="w-full py-[12px] px-[16px] rounded-[16px] border-[1px] border-light-60"
            >
              <DropdownSelect
                options={categoryList}
                selectedValue={selectedCategory}
                onValueChange={setSelectedCategory}
                name="Category"
              />
            </View>
            <View
              className="w-full py-[12px] px-[16px] rounded-[16px] border-[1px] border-light-60"
            >
              <TextInput
                className="w-full text-[16px] text-black"
                value={fieldData.description}
                placeholder='Description'
                placeholderTextColor={"#91919F"}
                onChangeText={(text) => {
                  setFieldData((fieldData) => ({
                    ...fieldData,
                    ["description"]: text,
                  }))
                }
                }
              ></TextInput>
            </View>
            <View
              className="w-full py-[12px] px-[16px] rounded-[16px] border-[1px] border-light-60"
            >
              <DropdownSelect
                options={walletList}
                selectedValue={selectedWallet}
                onValueChange={setSelectedWallet}
                name="Wallet"
              />
            </View>
          </View>
          <View>
            
          </View>
          <Pressable>
            <View className="w-full bg-violet-100 rounded-[16px] p-[18px]">
              <Text className="text-center text-light-80 font-semibold text-[18px]">Continue</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}
