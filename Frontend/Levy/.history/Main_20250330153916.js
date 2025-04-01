import { NavigationContainer, StackRouter } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import SignupScreen from './src/screens/Signup/SignupScreen';
import Login from './src/screens/Login/Login';
import Home from './src/screens/Home/Home';
import Loader from './src/components/Loader';
import ProfileMenu from './src/screens/ProfileMenu/ProfileMenu';
import AddExpense from './src/screens/Expense/AddExpense';
import Transaction from './src/screens/Expense/Transaction';
import ExpenseDetail from './src/screens/Expense/ExpenseDetail';
import EditExpense from './src/screens/Expense/EditExpense';
import Report from './src/screens/Expense/Report';
import Budget from './src/screens/Budget/Budget';
import AddBudget from './src/screens/Budget/AddBudget';
import DetailBudget from './src/screens/Budget/DetailBudget';
import EditBudget from './src/screens/Budget/EditBudget';


export default function Main() {
    const Stack = createStackNavigator();
    const navigationContianerRef = useRef();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='splash'>
                    <Stack.Screen name="splash" component={SplashScreen} />
                    <Stack.Screen name="onboarding" component={OnboardingScreen} />
                    <Stack.Screen name="signup" component={SignupScreen} />
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="home" component={Home} />
                    <Stack.Screen name="profileMenu" component={ProfileMenu} options={{ animation: 'slide_from_left' }} />
                    <Stack.Screen name="addExpense" component={AddExpense} />
                    <Stack.Screen name="editExpense" component={EditExpense} />
                    <Stack.Screen name="transaction" component={Transaction} />
                    <Stack.Screen name="expenseDetail" component={ExpenseDetail} />
                    <Stack.Screen name="report" component={Report} />
                    <Stack.Screen name="budget" component={Budget} />
                    <Stack.Screen name="addBudget" component={AddBudget} />
                    <Stack.Screen name="detailBudget" component={DetailBudget} />
                    <Stack.Screen name="editBudget" component={EditBudget} />
                </Stack.Navigator>
                <Loader/>
            </NavigationContainer>
        </>
    )
}
