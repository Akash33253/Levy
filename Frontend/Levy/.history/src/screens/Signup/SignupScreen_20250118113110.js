import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
              className="w-full text-[16px] placeholder:text-light-20"
              value={fieldData.full_name}
              placeholder='Name'
              onChangeText={(name) => {
                setFieldData((fieldData) => ({
                  ...fieldData,
                  ["full_name"]: name,
                }))
              }
              }
            ></TextInput>
          </View>
          <View className="flex px-[12px] py-[16px] w-full border-[1px] border-light-60 rounded-[16px]">
            <TextInput
              className="w-full text-[16px] placeholder:text-light-20"
              value={fieldData.email}
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={(email) => {
                setFieldData((fieldData) => ({
                  ...fieldData,
                  ["email"]: email,
                }))
              }
              }
            ></TextInput>
          </View>
          <View className="flex px-[12px] py-[16px] w-full border-[1px] border-light-60 rounded-[16px] gap-[16px] flex-row">
            <TextInput
              className="flex-1 text-[16px] placeholder:text-light-20"
              value={fieldData.password}
              placeholder='Password'
              textContentType='password'
              keyboardType='email-address'
              onChangeText={(password) => {
                setFieldData((fieldData) => ({
                  ...fieldData,
                  ["password"]: password,
                }))
              }
              }
            ></TextInput>
            <TouchableOpacity>
              
            </TouchableOpacity>
            <Image
            className="w-[32px] h-[32px]"
            source={require('../../../assets/images/eyeShow.png')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
