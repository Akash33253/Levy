import { CommonActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function Footer({ navigation, color }) {
    const [footerTab, setFooterTab] = useState(null)
    useEffect(() => {
        const routeStack = navigation.getState()?.routes;
        // console.log("route :", routeStack[routeStack.length - 1]?.name);
        setFooterTab(routeStack[routeStack.length - 1]?.name);
    }, [navigation])
    return (
        <View className="py-[10px] flex flex-row justify-between w-full items-center px-[30px] rounded-t-[30px] bg-white">
            <View
                style={{
                    backgroundColor: color
                }}
                className={`absolute top-0 left-1/2 -ml-[5px] -mt-[27px] flex items-center justify-center w-[70px] h-[70px] rounded-full`}>
                <Pressable
                    onPress={() => {
                        navigation.navigate("addExpense")
                    }}
                    className=" bg-violet-100 w-[56px] h-[56px] flex items-center justify-center rounded-full">
                    <Image
                        className="w-[27px] h-[27px]"
                        source={require('../../assets/images/plus.png')}
                    />
                </Pressable>
            </View>
            <View className="flex flex-row gap-[35px]">
                <Pressable
                    onPress={() => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0, // This sets the index of the first screen in the stack
                                routes: [{ name: 'home' }], // This is the route you want to navigate to
                            })
                        );
                    }}
                    className="flex flex-col gap-[4px] items-center">
                    <Image
                        className="w-[32px] h-[32px]"
                        source={footerTab === 'home' ? require('../../assets/images/homeBlue.png') : require('../../assets/images/home.png')}
                    />
                    <Text className={`text-[10px] ${footerTab === 'home' ? "text-violet-100" : "text-[#C6C6C6]"}  font-inter-medium`}>Home</Text>
                </Pressable>
                <Pressable
                    onPress={() => { navigation.navigate('transaction') }}
                    className="flex flex-col gap-[4px] items-center">
                    <Image
                        className="w-[32px] h-[32px]"
                        source={footerTab === 'transaction' ? require('../../assets/images/transactionBlue.png') : require('../../assets/images/transaction.png')}
                    />
                    <Text className={`text-[10px] ${footerTab === 'transaction' ? "text-violet-100" : "text-[#C6C6C6]"}  font-inter-medium`}>Transaction</Text>
                </Pressable>
            </View>
            <View className="flex flex-row gap-[35px]">
                <Pressable
                 onPress={() => { navigation.navigate('transaction') }}
                 className="flex flex-col gap-[4px] items-center">
                    <Image
                        className="w-[32px] h-[32px]"
                        source={footerTab === 'budget' ? require('../../assets/images/budgetBlue.png') : require('../../assets/images/budget.png')}
                    />
                    <Text className={`text-[10px] ${footerTab === 'budget' ? "text-violet-100" : "text-[#C6C6C6]"}  font-inter-medium`}>Budget</Text>
                </Pressable>
                <Pressable className="flex flex-col gap-[4px] items-center"
                    onPress={() => {
                        navigation.navigate('profileMenu')
                    }}>
                    <Image
                        className="w-[32px] h-[32px]"
                        source={require('../../assets/images/user.png')}
                    />
                    <Text className={`text-[10px] ${footerTab === 'profileMenu' ? "text-violet-100" : "text-[#C6C6C6]"}  font-inter-medium`}>Profile</Text>
                </Pressable>
            </View>
        </View>
    )
}
