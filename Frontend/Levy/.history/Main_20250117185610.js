import { NavigationContainer, StackRouter } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Text, View } from 'react-native'
import Hello from './src/screens/Hello';
import { createStackNavigator } from '@react-navigation/stack';


export default function Main() {
    const Stack = createStackNavigator();
    const navigationContianerRef = useRef();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Hello'>
                    <Stack.Screen name="splash" component={} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
