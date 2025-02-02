import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../../components/Footer'
import { ScrollView } from 'react-native-gesture-handler'
import DropdownSelect from '../../components/DropDownSelect'

export default function Transaction({ navigation }) {
    const [month,setMonth] = useState([])
    return (
        <SafeAreaView className="flex-1 bg-light-100">
            <View className="flex-1">
                <View className="w-full py-[12px] px-[16px] flex flex-row gap-[10px]">
                    <View>
                        <DropdownSelect
                            options={["month1","month2","month3"]}
                            selectedValue={selectedCategory}
                            onValueChange={setSelectedCategory}
                            name="Category"
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
