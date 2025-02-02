import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'

export default function SignupScreen({ navigation }) {
  const [fieldData,setFieldData] = useState({
    full_name : "",
    email : "",
    password  :"",
  })
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <TopHeader navigation={navigation} title={'Sign Up'} />
      <View className="flex-1 py-[55px] px-[16px]">
        <View className="flex flex-col gap-[24px]">
          <View className="flex px-[12px] py-[16px] w-full border-[1px] border-light-60 rounded-[16px]">
            <TextInput
              className="w-full text-[16px] pla"
              value={fieldData.full_name}
              onChangeText={(name) => {
                setFieldData((fieldData) => ({
                  ...fieldData,
                  ["full_name"]: name,
                }))
              }
              }
            ></TextInput>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
