import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import DropdownSelect from '../../components/DropDownSelect'
import LevyContext from '../../context/LevyContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Footer from '../../components/Footer'
import MonthYearPicker from '../../components/MonthYearPicker'

export default function AddBudget({ navigation, route }) {
    const context = useContext(LevyContext);
    const { ipTemp, setIsLoading } = context;
    const { month, year } = route.params;
    const [fieldData, setFieldData] = useState({
        amount: 0,
        category: "",
    })
    const [selectedCategory, setSelectedCategory] = useState('');
    const [alertModal, setAlertModal] = useState('');
    const categoryList = ["Food", "Transport", "Rent", "Bill", "Shopping", "Investment", "Personal", "Miscellaneous"];

    const addBudget = async () => {
        setIsLoading(true);
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await fetch(`http://${ipTemp}:5000/budget/createCategoryBudget`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token
                },
                body: JSON.stringify({
                    "year": year,
                    "month": month,
                    "category": selectedCategory,
                    "amount": fieldData.amount
                })
            })
            const json = await response.json();
            if (json && json.success) {
                setAlertModal('success')
                setSelectedCategory('')
                setFieldData({
                    amount: 0,
                    category: "",
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
        <SafeAreaView className="flex-1 bg-violet-100">
            <TopHeader navigation={navigation} title={'Create Budget'} theme={"dark"} />
            <View className="flex-1 flex flex-col gap-[18px] justify-end">
                <View className="px-[26px] flex flex-col gap-[16px]">
                    <Text className="text-[18px] font-inter-semibold text-light-60">How much do yo want to spend?</Text>
                    <View className="flex flex-row items-center w-full">
                        <Text className="text-[64px] text-light-80 font-inter-semibold">&#8377;</Text>
                        <TextInput
                            className="w-full text-[64px] text-light-80 font-inter-semibold"
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
                <View className="bg-white w-full rounded-t-[32px] py-[24px] px-[16px] flex flex-col gap-[42px]">
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
                    <Pressable 
                    onPress={()=>{
                        addBudget();
                    }}>
                        <View className="w-full bg-violet-100 rounded-[16px] p-[18px]">
                            <Text className="text-center text-light-80 font-inter-semibold text-[18px]">Continue</Text>
                        </View>
                    </Pressable>
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
                        <Text className="text-[14px] font-inter-medium">Expense has been successfully added</Text>
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
                        <Text className="text-[14px] font-inter-medium">Expense addition failed, try again later</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    )
}
