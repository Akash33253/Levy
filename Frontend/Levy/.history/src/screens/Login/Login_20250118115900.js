import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Ionicons } from '@expo/vector-icons';

export default function Login({navigation}) {
   const [fieldData, setFieldData] = useState({
      email: "",
      password: "",
    })
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
       <SafeAreaView className="flex-1 bg-light-100">
            <TopHeader navigation={navigation} title={'Login'} />
            <View className="flex w-full py-[55px] px-[16px] gap-[60px] flex-col">
              <View className="flex flex-col gap-[24px]">
                <View className="flex px-[12px] py-[16px] w-full border-[1px] border-light-60 rounded-[16px]">
                  <TextInput
                    className="w-full text-[16px] placeholder:text-light-20"
                    value={fieldData.email}
                    placeholder='Email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    onChangeText={(email) => {
                      setFieldData((fieldData) => ({
                        ...fieldData,
                        ["email"]: email,
                      }))
                    }
                    }
                  ></TextInput>
                </View>
                <View className="flex px-[12px] py-[16px] w-full border-[1px] border-light-60 rounded-[16px] gap-[16px] flex-row items-center">
                  <TextInput
                    className="flex-1 text-[16px] placeholder:text-light-20"
                    value={fieldData.password}
                    placeholder='Password'
                    textContentType='password'
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={(password) => {
                      setFieldData((fieldData) => ({
                        ...fieldData,
                        ["password"]: password,
                      }))
                    }
                    }
                  ></TextInput>
      
                  <TouchableOpacity
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    <Ionicons
                      name={isPasswordVisible ? 'eye' : 'eye-off'}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex flex-col gap-[33px] items-center">
                <Pressable className="w-full">
                  <View className="w-full bg-violet-100 rounded-[16px] p-[18px]">
                    <Text className="text-center text-light-80 font-semibold text-[18px]">Login</Text>
                  </View>
                </Pressable>
                <Text className="text-violet-100 text-[16px] font-medium">Login</Text>
                <View className="flex flex-row items-center">
                  <Text className="text-[16px] text-light-20 font-medium">Already have an account? <Pressable><Text className="text-violet-100 text-[16px] font-medium">Login</Text></Pressable></Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
    )
  }
  