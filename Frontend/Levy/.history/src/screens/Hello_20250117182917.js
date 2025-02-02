import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Hello() {
    return (
        <SafeAreaView>
            <View className="w-[100%] bg">
                <Text className="">Hello</Text>
            </View>
        </SafeAreaView>
    )
}
