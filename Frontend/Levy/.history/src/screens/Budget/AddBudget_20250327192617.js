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

export default function AddBudget({ navigation }) {
    return (
        <SafeAreaView className="flex-1 bg-violet-100">
            <TopHeader navigation={navigation} title={'Create Budget'} theme={"dark"} />
            <View className="flex-1 flex flex-col gap-[18px]">
                <View className="bg-red h-[20px] w-full">

                </View>
                <View className="bg-white h-[20px] w-full">

                </View>
            </View>
        </SafeAreaView>
    )
}
