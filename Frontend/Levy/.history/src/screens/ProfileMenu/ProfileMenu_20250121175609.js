import React, { useContext, useState } from 'react'
import { Image, Modal, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LevyContext from '../../context/LevyContext'

export default function ProfileMenu() {
    const context = useContext(LevyContext);
    const { user } = context
    const [logoutModal, setLogoutModal] = useState(true);
    return (
        <SafeAreaView className="flex-1 bg-[#F6F6F6]">
            <View className="flex flex-col gap-[40px]">
                <View className="flex flex-row items-center px-[25px] mt-[30px] gap-[15px]">
                    <View className="w-[80px] h-[80px] bg-light-100 flex items-center justify-center rounded-full">
                        <Image
                            className="w-[70px] h-[70px]"
                            source={require('../../../assets/images/profile.png')}
                        />
                    </View>
                    <View className="flex flex-col gap-[px]">
                        <Text className="text-light-20 font-medium text-[14px]">Username</Text>
                        <Text className="font-semibold text-dark-75 text-[24px]">{user.name}</Text>
                    </View>
                </View>
                <View className="flex flex-col mx-[20px] rounded-2xl bg-light-100">
                    <Pressable className="flex flex-row px-[17px] py-[15px] items-center gap-[9px] border-b-[1px] border-[#F6F6F6]"    >
                        <Image
                            className="w-[52px] h-[52px]"
                            source={require('../../../assets/images/export.png')}
                        />
                        <Text className="text-dark-25 font-medium text-[16px]">Export Data</Text>
                    </Pressable>
                    <Pressable
                    
                     className="flex flex-row px-[17px] py-[15px] items-center gap-[9px]"    >
                        <Image
                            className="w-[52px] h-[52px]"
                            source={require('../../../assets/images/logout.png')}
                        />
                        <Text className="text-dark-25 font-medium text-[16px]">Logout</Text>
                    </Pressable>
                </View>
            </View>
            <Modal
                visible={logoutModal}
                transparent={true}
                animationType='fade'
            >
                <View className="flex-1 relative bg-[rgba(0,0,0,0.5)] justify-end">
                    <View className="flex flex-col items-center gap-[16px] bg-white w-full rounded-t-[30px] pt-[26px] pb-[16px] px-[16px]">
                        <View className="flex flex-col items-center">
                                <Text className="font-semibold text-[18px]">Logout?</Text>
                                <Text className=" py-[20px] text-light-20 font-medium text-[16px] text-center">Are you sure do you wanna logout?</Text>
                        </View>
                        <View className="flex w-full flex-row items-center justify-between gap-[20px]">
                            <Pressable 
                            onPress={()=>{
                                setLogoutModal(false)
                            }}
                            className="flex-1 py-[17px] flex items-center bg-violet-20 rounded-[16px]">
                                <Text className="text-violet-100 text-[18px] font-semibold">No</Text>
                            </Pressable>
                            <Pressable 
                            className="flex-1 py-[17px] flex items-center bg-violet-100 rounded-[16px]">
                                <Text className="text-light-100 text-[18px] font-semibold">Yes</Text>
                            </Pressable>   
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}



const LogoutModal = () => {
    return (
        <View>
            <Text>Logout</Text>
        </View>
    )
}