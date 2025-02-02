import React, { useContext, useState } from 'react'
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LevyContext from '../../context/LevyContext';

export default function SignupScreen({ navigation }) {
  const context = useContext(LevyContext);
  const {setIsLoading,ipTemp} = context;
  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);



  const signUpUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://${ipTemp}:5000/auth/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fieldData)
      })
      const json = await response.json();
      if (json && json.success) {
        const token = json.authToken;
        await AsyncStorage.setItem("token", token);
        navigation.dispatch(
                                    CommonActions.reset({
                                        index: 0, // This sets the index of the first screen in the stack
                                        routes: [{ name: 'home' }], // This is the route you want to navigate to
                                    })
                                );
        setFieldData({
          name: "",
          email: "",
          password: "",
        })
      }

    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <TopHeader navigation={navigation} title={'Sign Up'} />
      <View className="flex w-full py-[55px] px-[16px] gap-[60px] flex-col">
        <View className="flex flex-col gap-[24px]">
          <View className="flex px-[12px] py-[16px] w-full border-[1px] border-light-60 rounded-[16px]">
            <TextInput
              className="w-full text-[16px] placeholder:text-light-20"
              value={fieldData.name}
              placeholder='Name'
              onChangeText={(name) => {
                setFieldData((fieldData) => ({
                  ...fieldData,
                  ["name"]: name,
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
        <View className="flex flex-col gap-[16px] items-center">
          <Pressable className="w-full" onPress={()=>{
            signUpUser();
          }}>
            <View className="w-full bg-violet-100 rounded-[16px] p-[18px]">
              <Text className="text-center text-light-80 font-semibold text-[18px]">Sign Up</Text>
            </View>
          </Pressable>
          <View className="flex flex-row items-center">
            <Text className="text-[16px] text-light-20 font-medium">Already have an account? <Pressable onPress={() => {
              navigation.replace("login");
            }}><Text className="text-violet-100 text-[16px] font-medium">Login</Text></Pressable></Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
