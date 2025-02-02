import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import DropdownSelect from '../../components/DropDownSelect'
import LevyContext from '../../context/LevyContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function AddExpense({ navigation }) {
  const context = useContext(LevyContext);
  const { ipTemp, setIsLoading } = context;
  const [fieldData, setFieldData] = useState({
    amount: 0,
    category: "",
    description: "",
    wallet: ""
  })
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const [alertModal, setAlertModal] = useState('');

  const walletList = ["Cash", "Paytm", "PhonePe", "Gpay", "Online"];
  const categoryList = ["Food", "Transport", "Rent", "Bill", "Shopping", "Investment", "Personal", "Miscellaneous"];
  const addExpense = async () => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`http://${ipTemp}:5000/expense/addExpense`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token
        },
        body: JSON.stringify({
          amount: fieldData.amount,
          description: fieldData.description,
          category: selectedCategory,
          wallet: selectedWallet
        })
      })
      const json = await response.json();
      if (json && json.success && json.expense) {
        setAlertModal('success')
        setSelectedCategory('')
        setSelectedWallet('')
        setFieldData({
          amount: 0,
          category: "",
          description: "",
          wallet: ""
        })
      }
      else {
        setAlertModal('fail')
      }

    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  }
  return (
    <SafeAreaView className="flex-1 bg-red-100">
      <TopHeader navigation={navigation} title={'Expense'} theme={'dark'} />
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
          <View className="w-full p-[16px]">
            <Pressable
              onPress={() => {
                addExpense();
              }}>
              <View className="w-full bg-violet-100 rounded-[16px] p-[18px]">
                <Text className="text-center text-light-80 font-semibold text-[18px]">Continue</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <Modal transparent animationType="fade" visible={alertModal === 'success'}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setAlertModal('');
            navigation.goBack();
          }}
          className="flex-1 bg-black/50 justify-center items-center px-[24px]"
        >
          <View className="w-full bg-white  rounded-[20px] px-[24px] py-[19px] flex flex-col gap-[8px] items-center">
            <Image
              className="w-[55px] h-[55px]"
              source={require('../../../assets/images/success.png')}
            />
            <Text className="text-[14px] font-medium">Expense has been successfully added</Text>
          </View>
        </TouchableOpacity>
      </Modal>
      <Modal transparent animationType="fade" visible={alertModal === 'fail'}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setAlertModal('')}
          className="flex-1 bg-black/50 justify-center items-center px-[24px]"
        >
          <View className="w-full bg-white  rounded-[20px] px-[24px] py-[19px] flex flex-col gap-[8px] items-center">
            <Image
              className="w-[64px] h-[64px]"
              source={require('../../../assets/images/crossRed.png')}
            />
            <Text className="text-[14px] font-medium">Expense addition failed, try again later</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  )
}


