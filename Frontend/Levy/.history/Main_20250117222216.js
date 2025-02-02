import { NavigationContainer, StackRouter } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';


export default function Main() {
    const Stack = createStackNavigator();
    const navigationContianerRef = useRef();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='splash'>
                    <Stack.Screen name="splash" component={SplashScreen} />
                    <Stack.Screen name="onboarding" component={OnboardingScreen} />
                    <Stack.Screen name="signup" component={OnboardingScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
