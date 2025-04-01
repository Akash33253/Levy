import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import RingWithSegments from '../../components/RingWithSegments'
import { Canvas, Circle } from '@shopify/react-native-skia'
import LevyContext from '../../context/LevyContext'
import AnimatedBarChart from '../../components/AnimatedBarChart'

export default function Report({ navigation }) {
    const context = useContext(LevyContext);
    const {monthlyCategoryExpense,monthlyTotalExpense} = context;
    return (
        <SafeAreaView className="bg-[#FFFFFF] flex-1">
            <TopHeader title={"Financial Report"} navigation={navigation} />
            <View className="flex-1 flex gap-[20px] flex-col">
                    <RingWithSegments />
                    <Text className="absol text-[black] font-bold text-[32px]">&#8377; {monthlyTotalExpense}</Text>
                    <AnimatedBarChart/>
            </View>
            
        </SafeAreaView>
    )
}
