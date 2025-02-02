import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'

export default function SignupScreen({ navigation }) {
  const [fieldData]
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <TopHeader navigation={navigation} title={'Sign Up'} />
      <View className="flex-1 py-[55px] px-[16px]">
        <View className="flex flex-col gap-[24px]">
          <View className="flex px-[12px] py-[16px] w-full border-[1px] border-light-60 rounded-[16px]">
            <TextInput
              style={{ width: "100%", height: "100%", fontFamily: 'Poppins-400', fontSize: responsiveFontSize(14 / 7.34), }}
              selectionColor="#3D5CFF"
              placeholderTextColor="#6A7A80"
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
