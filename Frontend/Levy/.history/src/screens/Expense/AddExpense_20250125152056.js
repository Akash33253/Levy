import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function AddExpense({ navigation }) {
  const [fieldData, setFieldData] = useState({
    amount: 0,
    category: "",
    description: "",
    wallet: ""
  })
  const categoryList = ["category1,"]
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
        <View className="flex-1 bg-light-80 rounded-t-[32px] flex-col flex">
          <View className="flex flex-col py-[24px] px-[16px] gap-[16px]">
            <View
              style={{
                borderColor: fieldData.gender === "" ? "#C2C8CB" : '#3D5CFF',
                borderWidth: 1,
                width: "100%",
                borderRadius: 10,
                // paddingHorizontal: responsiveWidth(14 / 3.6),
                paddingVertical: responsiveHeight(14.5 / 7.13)
              }}
            >
              <SelectDropdown
                data={genderData}
                onSelect={(sel, ind) => {
                  setErrorMsg({
                    ...errorMsg,
                    ['gender']: ""
                  })
                  setFieldData((fieldData) => ({
                    ...fieldData,
                    ["gender"]: sel,
                  }))
                }}
                defaultValue="Select"
                dropdownStyle={{
                  borderColor: "#6A7A80",
                  borderWidth: 1,
                  zIndex: 1,
                  backgroundColor: "white",
                }}
                buttonStyle={{
                  backgroundColor: "",
                  width: "100%",
                  height: responsiveHeight(22 / 7.13),
                }}
                buttonTextStyle={{ color: "black", fontFamily: "Poppins-400", fontSize: responsiveFontSize(14 / 7.34), textAlign: 'left', }}
                rowStyle={{ padding: 2 }}
                selectedRowStyle={{ backgroundColor: "#3D5CFF" }}
                selectedRowTextStyle={{ color: "white" }}
                renderDropdownIcon={(icon) => (
                  <Image
                    style={{
                      width: responsiveWidth(22 / 3.6),
                      height: responsiveHeight(22 / 7.13)
                    }}
                    source={fieldData.gender === "" ? require('../../../assets/dropDownGrey.png') : require('../../../assets/dropDownBlack.png')}
                  />
                )}
                dropdownIconPosition="right"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
