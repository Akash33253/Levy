import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SplashScreen() {
    return (
        <SafeAreaView className="flex-1 bg-violet-100 flex-col">
            <View className="h-full items-center justify-center">
                <Text className="text-light-100">Levy</Text>
            </View>
        </SafeAreaView>
    )
}
