import React, { useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function Footer({ navigation ,color}) {
    const [footerTab, setFooterTab] = useState(null)
    useEffect(() => {
        const routeStack = navigation.getState()?.routes;
        // console.log("route :", routeStack[routeStack.length - 1]?.name);
        setFooterTab(routeStack[routeStack.length - 1]?.name);
      }, [navigation])
    return (
        <View className="py-[10px] flex flex-row justify-between w-full items-center px-[50px] rounded-t-[30px] bg-white">
            <View className={`absolute top-0 left-1/2 ml-[20px] -mt-[27px] flex items-center justify-center w-[70px] h-[70px] rounded-full bg-${color} bg-[#FFF6E5]`}>
                <Pressable className=" bg-violet-100 w-[56px] h-[56px] flex items-center justify-center rounded-full">
                    <Image
                        className="w-[27px] h-[27px]"
                        source={require('../../assets/images/plus.png')}
                    />
                </Pressable>
            </View>
            <Pressable className="flex flex-col gap-[4px] items-center">
                <Image
                    className="w-[32px] h-[32px]"
                    source={footerTab ==='home'?require('../../assets/images/homeBlue.png'):require('../../assets/images/home.png')}
                />
                <Text className={text-[10px] text-[#C6C6C6] font-medium}>Home</Text>
            </Pressable>
            <Pressable className="flex flex-col gap-[4px] items-center">
                <Image
                    className="w-[32px] h-[32px]"
                    source={require('../../assets/images/user.png')}
                />
                <Text className="text-[10px] text-[#C6C6C6] font-medium">Profile</Text>
            </Pressable>
        </View>
    )
}
