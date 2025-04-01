import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import DropdownSelect from '../../components/DropDownSelect'
import LevyContext from '../../context/LevyContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Footer from '../../components/Footer'

export default function Budget({navigation}) {
    return (
      <SafeAreaView className="flex-1 bg-violet-100">
        <View className="h-[100px]">

        </View>
        <View className="flex-1 bg-white">
            <View className="flex-1">

            </View>
            <Footer navigation={navigation} color={"#FFFFFF"} />
        </View>
      </SafeAreaView>
    )
  }
  
  
  