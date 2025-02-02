import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import onboarding1 from '../../../assets/images/Onboarding1.png'
export default function OnboardingScreen() {
    const onboardingImages = [onboarding1,onboarding1,onboarding1];
    return (
        <SafeAreaView className="flex-1 bg-light-100">
            <View className="flex h-full flex-col justify-between gap-[30px]">
                <View className="flex-1 px-[30px] bg-pink-400">
                    <FlatList
                        data={onboardingImages}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false}
                        onScroll={(event) => {
                            const { contentOffset, layoutMeasurement } = event.nativeEvent;
                            const newPage = Math.floor(contentOffset.x / layoutMeasurement.width);
                            // setImgIndex(newPage);
                        }}
                        renderItem={({ item }) => {
                            return <View>
                                <Image
                                className="w-full h-[312px]"
                                source={item}
                                />
                            </View>

                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
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
