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
            <View className="flex-1 bg-white rounded-t-[32px]">
                <View className="flex-1">
                    <View className="flex-1">
                        <View className="flex-1 flex items-center justify-center px-[63px]">
                            <Text className="text-center text-light-20 font-inter-medium text-[16px]">You don't have a budget</Text>
                            <Text className="text-center text-light-20 font-inter-medium text-[16px]">Let's make one so you in control</Text>
                        </View>
                    </View>
                    <View className="w-full px-[16px] py-[28px]">
                        <Pressable>
                            <View className="w-full bg-violet-100 rounded-[16px] p-[18px]">
                                <Text className="text-center text-light-80 font-inter-semibold text-[18px]">Create a Budget</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
