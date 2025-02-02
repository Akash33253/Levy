import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Hello() {
    return (
        <SafeAreaView>
            <View className="flex-1 w-[100%] bg-black">
                <Text className="">Hello</Text>
            </View>
        </SafeAreaView>
    )
}
