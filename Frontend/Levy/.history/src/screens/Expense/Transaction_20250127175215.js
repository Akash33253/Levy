import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../../components/Footer'
import { ScrollView } from 'react-native-gesture-handler'
import DropdownSelect from '../../components/DropDownSelect'
import MonthYearPicker from '../../components/MonthYearPicker'

export default function Transaction({ navigation }) {
    const [month, setMonth] = useState(null);
    const monthShortNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const monthNumbers = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12
    };
    const [monthYear,setMonthYear] = useState({
        month : '',
        year : ''
    })
    return (
        <SafeAreaView className="flex-1 bg-light-100">
            <View className="flex-1">
                <View className="w-full py-[12px] px-[16px] flex flex-row gap-[10px]">
                    <View className="flex w-[120px] mr-auto  flex-row pl-[10px] pr-[16px] py-[8px] rounded-[40px] border-[1px] border-light-60 gap-[3px]">
                        <MonthYearPicker
                            selectedMonthYear={{
                                month : "1",
                                year : '2025'
                            }}
                            onValueChange={setMonthYear}
                        />
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        paddingVertical: 10
                    }}
                >


                </ScrollView>
            </View>
            <Footer navigation={navigation} color={"#FFFFFF"} />
        </SafeAreaView>
    )
}
