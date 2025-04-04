import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import LevyContext from '../../context/LevyContext'

export default function ExpenseDetail({ navigation }) {
    const context = useContext(LevyContext);
    const {} = context;
    return (
        <SafeAreaView className="flex-1 bg-red-100">
            <TopHeader navigation={navigation} title={'Expense Detail'} theme={"dark"} />
            <View className="flex-1 flex flex-col">
                <View className="flex flex-col px-[16px] items-center mt-[16px] mb-[21px] gap-[8px]">
                    <Text className="text-light-80 font-bold text-[48px]">&#8377;1000</Text>
                    <Text className="text-light-80 font-medium text-[13px]">Saturday 4 June 2021  16:20</Text>
                </View>
                <View className="flex-1 w-full bg-white">
                    <View className="w-full h-[50px] bg-red-100 rounded-b-[20px]">
                    </View>
                    <View className="flex-1 bg-white px-[16px] relative pt-[55px] gap-[14px]">
                        <View className="absolute -top-[40px] left-[16px] right-[16px] flex flex-row justify-between w-full border-[1px] items-center border-light-60 px-[26px] py-[12px] rounded-[12px] bg-white">
                            <View className="flex flex-row gap-[90px] items-center">
                                <View className="flex flex-col gap-[9px] items-center">
                                    <Text className="text-light-20 text-[14px] font-medium">Category</Text>
                                    <Text className="text-black text-[16px] font-semibold">Shopping</Text>
                                </View>
                                <View className="flex flex-col gap-[9px] items-center">
                                    <Text className="text-light-20 text-[14px] font-medium">Wallet</Text>
                                    <Text className="text-black text-[16px] font-semibold">Paytm</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image
                                    className="w-[32px] h-[32px]"
                                    source={require('../../../assets/images/trash.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View className="border-b-[2px] border-light-40 border-dashed"></View>
                        <View className="flex-1 flex flex-col justify-between">
                            <View className="flex flex-col gap-[15px]">
                                <Text className="text-light-20 text-[16px] font-semibold">Description</Text>
                                <Text className="text-black text-[16px] font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quas, est saepe mollitia fugit numquam impedit totam hic maiores molestias! Suscipit natus autem saepe minus dolorem facere laudantium debitis. Possimus ad fugit quos aliquid quo nostrum excepturi ipsam id maxime earum aspernatur distinctio, quibusdam sed quidem ducimus porro natus dicta?</Text>
                            </View>
                            <Pressable className="w-full mb-[16px]">
                                <View className="w-full bg-violet-100 rounded-[16px] p-[18px]">
                                    <Text className="text-center text-light-80 font-semibold text-[18px]">Edit</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
