import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SplashScreen() {
    return (
        <SafeAreaView className="flex bg-violet-100 flex-col">
            <View className="flex items-center justify-center">
                <Text>Levy</Text>
            </View>
        </SafeAreaView>
    )
}
