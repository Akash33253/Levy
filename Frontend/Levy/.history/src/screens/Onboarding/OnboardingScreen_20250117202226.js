import React, { useState } from 'react'
import { FlatList, Image, Pressable, Text, useWindowDimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import onboarding1 from '../../../assets/images/Onboarding1.png'
import onboarding2 from '../../../assets/images/Onboarding2.png'
import onboarding3 from '../../../assets/images/Onboarding3.png'
export default function OnboardingScreen() {
    const onboardingImages = [onboarding1,onboarding2,onboarding3];
    const [imgIndex, setImgIndex] = useState(0);
    const { width, height } = useWindowDimensions()
    return (
        <SafeAreaView className="flex-1 bg-light-100">
            <View className="flex h-full flex-col justify-between gap-[30px]">
                <View className="flex-1 px-[30px]">
                    <FlatList
                        data={onboardingImages}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={true}
                        snapToAlignment='center'
                        decelerationRate={'fast'}
                        onScroll={(event) => {
                            const { contentOffset, layoutMeasurement } = event.nativeEvent;
                            const newPage = Math.floor(contentOffset.x / layoutMeasurement.width);
                            setImgIndex(newPage);
                        }}
                        renderItem={({ item }) => {
                            return <View
                            style={{
                                width :width,
                            }}
                            className="items-center">
                                <Image
                                className="w-[300px] h-[300px]"
                                source={item}
                                />
                            </View>
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                {
                    onboardingImages?.map((item,index)=>{
                        return <View key={index} className={}></View>
                    })
                }
                </View>
                <View className="px-[20px] pb-[20px] flex flex-col gap-[16px]">
                    <Pressable>
                        <View className="w-full bg-violet-100 rounded-[16px] p-[18px]">
                            <Text className="text-center text-light-80 font-semibold text-[18px]">Sign Up</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View className="w-full bg-violet-20 rounded-[16px] p-[18px]">
                            <Text className="text-center text-violet-100 font-semibold text-[18px]">Login</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
