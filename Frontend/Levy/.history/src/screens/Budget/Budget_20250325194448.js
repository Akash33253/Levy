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

export default function Budget({ navigation }) {
    const [monthYear, setMonthYear] = useState({
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear().toString()
    })
    return (
        <SafeAreaView className="flex-1 bg-violet-100">
            <View className="flex w-[130px] flex-row pl-[10px] pr-[26px] py-[8px] rounded-[40px] border-[1px] border-light-60 gap-[3px]">
                <MonthYearPicker
                    selectedMonthYear={monthYear}
                    onValueChange={setMonthYear}
                />
            </View>
            <View className="flex-1 bg-white rounded-t-[32px]">
                <View className="flex-1">

                </View>
                <Footer navigation={navigation} color={"#FFFFFF"} />
            </View>
        </SafeAreaView>
    )
}


