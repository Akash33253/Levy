import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LevyContext from '../../context/LevyContext'

export default function SplashScreen({ navigation }) {
    const context = useContext(LevyContext);
    const {}
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('onboarding')
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation])
    const signUpUser = async () => {
        
        try {
          const response = await fetch(`http://${ipTemp}:5000/auth/createUser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(fieldData)
          })
          const json = await response.json();
          if (json && json.success) {
            const token = json.authToken;
            await AsyncStorage.setItem("token", token);
            navigation.replace('home');
            setFieldData({
              name: "",
              email: "",
              password: "",
            })
          }
    
        } catch (error) {
          console.log(error);
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
