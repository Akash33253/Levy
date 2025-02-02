import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import LevyContext from '../../context/LevyContext'

export default function ExpenseDetail({ navigation }) {
    const context = useContext(LevyContext);
    const { expenseDetail, deleteExpense, setIsLoading } = context;
    const [deleteModal, setDeleteModal] = useState(false);
    const [alertModal, setAlertModal] = useState('');

    function formatDate(isoString) {
        const date = new Date(isoString);
        const today = new Date();
        const yesterday = new Date();

        yesterday.setDate(today.getDate() - 1);

        const isToday = date.toDateString() === today.toDateString();
        const isYesterday = date.toDateString() === yesterday.toDateString();

        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };

        if (isToday) {
            return `Today, ${date.toLocaleString('en-US', options)}`;
        } else if (isYesterday) {
            return `Yesterday, ${date.toLocaleString('en-US', options)}`;
        } else {
            return date.toLocaleString('en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });
        }
    }

    const handleDeleteExpense = () => {
        const deleteStatus = deleteExpense(expenseDetail._id);
        if (deleteStatus) {
            setIsLoading(false)
            setDeleteModal(false)
            setAlertModal('success')
        }
        else {
            setIsLoading(false);
            setAlertModal('fail')
        }
    }
    return (
        <SafeAreaView className="flex-1 bg-red-100">
            <TopHeader navigation={navigation} title={'Expense Detail'} theme={"dark"} />
            <View className="flex-1 flex flex-col">
                <View className="flex flex-col px-[16px] items-center mt-[16px] mb-[21px] gap-[8px]">
                    <Text className="text-light-80 font-bold text-[48px]">&#8377;{expenseDetail?.amount}</Text>
                    <Text className="text-light-80 font-medium text-[13px]">{formatDate(expenseDetail?.date)}</Text>
                </View>
                <View className="flex-1 w-full bg-white">
                    <View className="w-full h-[50px] bg-red-100 rounded-b-[20px]">
                    </View>
                    <View className="flex-1 bg-white px-[16px] relative pt-[55px] gap-[14px]">
                        <View className="absolute -top-[40px] left-[16px] right-[16px] flex flex-row justify-between w-full border-[1px] items-center border-light-60 px-[26px] py-[12px] rounded-[12px] bg-white">
                            <View className="flex w-[60px] flex-row gap-[90px] items-center">
                                <View className="flex flex-col gap-[9px] items-center">
                                    <Text className="text-light-20 text-[14px] font-medium">Category</Text>
                                    <Text className="text-black text-[16px] font-semibold">{expenseDetail?.category}</Text>
                                </View>
                                <View className="flex flex-col gap-[9px] items-center">
                                    <Text className="text-light-20 text-[14px] font-medium">Wallet</Text>
                                    <Text className="text-black text-[16px] font-semibold">{expenseDetail?.wallet}</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    setDeleteModal(true);
                                }}>
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
                                <Text className="text-black text-[16px] font-medium">{expenseDetail?.description}</Text>
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
            <Modal
                visible={deleteModal}
                transparent={true}
                animationType='fade'
            >
                <View className="flex-1 relative bg-[rgba(0,0,0,0.5)] justify-end">
                    <View className="flex flex-col items-center gap-[16px] bg-white w-full rounded-t-[30px] pt-[26px] pb-[16px] px-[16px]">
                        <View className="flex flex-col items-center">
                            <Text className="font-semibold text-[18px]">Delete</Text>
                            <Text className=" py-[20px] text-light-20 font-medium text-[16px] text-center">Are you sure do you wanna Delete this expense?</Text>
                        </View>
                        <View className="flex w-full flex-row items-center justify-between gap-[20px]">
                            <Pressable
                                onPress={() => {
                                    setDeleteModal(false)
                                }}
                                className="flex-1 py-[17px] flex items-center bg-red-20 rounded-[16px]">
                                <Text className="text-red-100 text-[18px] font-semibold">No</Text>
                            </Pressable>
                            <Pressable
                                onPress={handleDeleteExpense}
                                className="flex-1 py-[17px] flex items-center bg-red-100 rounded-[16px]">
                                <Text className="text-light-100 text-[18px] font-semibold">Yes</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal transparent animationType="fade" visible={alertModal === 'success'}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        setAlertModal('');
                        navigation.goBack();
                    }}
                    className="flex-1 bg-black/50 justify-center items-center px-[24px]"
                >
                    <View className="w-full bg-white  rounded-[20px] px-[24px] py-[19px] flex flex-col gap-[8px] items-center">
                        <Image
                            className="w-[55px] h-[55px]"
                            source={require('../../../assets/images/success.png')}
                        />
                        <Text className="text-[14px] font-medium">Expense has been deleted successfully</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Modal transparent animationType="fade" visible={alertModal === 'fail'}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setAlertModal('')}
                    className="flex-1 bg-black/50 justify-center items-center px-[24px]"
                >
                    <View className="w-full bg-white  rounded-[20px] px-[24px] py-[19px] flex flex-col gap-[8px] items-center">
                        <Image
                            className="w-[64px] h-[64px]"
                            source={require('../../../assets/images/crossRed.png')}
                        />
                        <Text className="text-[14px] font-medium">Expense Deletion failed!</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    )
}
