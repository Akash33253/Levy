import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Hello() {
    return (
        <SafeAreaView>
            <View>
                <Text className="">Hello</Text>
            </View>
        </SafeAreaView>
    )
}
