import { NavigationContainer, StackRouter } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Text, View } from 'react-native'
import Hello from './src/screens/Hello';

export default function Main() {
    const navigationContianerRef = useRef();
    return (
        <>
            <NavigationContainer ref={navigationContianerRef}>
                <StackRouter.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Hello" component={Hello} />
                </StackRouter.Navigator>
            </NavigationContainer>
        </>
    )
}
