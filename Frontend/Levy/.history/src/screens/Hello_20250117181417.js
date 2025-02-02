import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Hello() {
    return (
        <SafeAreaView>
            <View className="">
                <Text className="text-white text-center">Hello</Text>
            </View>
        </SafeAreaView>
    )
}
