import { NavigationContainer, StackRouter } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Text, View } from 'react-native'
import Hello from './src/screens/Hello';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Main() {
    const Stack  = createNativeStackNavigator()
    const navigationContianerRef = useRef();
    return (
        <>
            <NavigationContainer ref={navigationContianerRef}>
                <StackRouter screenOptions={{ headerShown: false }}  initialRouteName='Hello'>
                <Stack.Screen name="Hello" component={Hello} />
                </StackRouter>
            </NavigationContainer>
        </>
    )
}
