import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../../components/Footer'
import { ScrollView } from 'react-native-gesture-handler'

export default function Transaction({ navigation }) {

    return (
        <SafeAreaView className="flex-1 bg-light-100">
            <View className="flex-1">
                <View className="w-full py-[12px] px-[16px] flex flex-row">

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
