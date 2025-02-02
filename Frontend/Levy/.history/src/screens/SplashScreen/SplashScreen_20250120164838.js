import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LevyContext from '../../context/LevyContext'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({ navigation }) {
    const context = useContext(LevyContext);
    const { ipTemp, setUser } = context;
    useEffect(() => {
        const timer = setTimeout(() => {
            get
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation])
    const getUser = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if(token){
                const response = await fetch(`http://${ipTemp}:5000/auth/getUser`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token" : token
                    },
                })
                const json = await response.json();
                if (json && json.user) {
                    navigation.replace('home');
                    setUser(json.user);
                }
                else{
                    navigation.replace('onboarding') 
                }
            }
            else{
                navigation.replace('onboarding')
            }

        } catch (error) {
            console.log(error);
            alert("Some erroe occured");
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-violet-100 flex-col">
            <View className="h-full items-center justify-center">
                <Text className="text-light-100 text-[56px] font-bold">Levy</Text>
            </View>
        </SafeAreaView>
    )
}
