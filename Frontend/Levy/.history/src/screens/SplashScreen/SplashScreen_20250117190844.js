import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native-reanimated/lib/typescript/Animated'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SplashScreen() {
    return (
        <SafeAreaView className="flex-1 bg-violet-100">
            <View className="">
                <Text>Levy</Text>
            </View>
        </SafeAreaView>
    )
}
