import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import LevyContext from '../../context/LevyContext'
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function DetailBudget({ navigation, route }) {
  const { budget } = route.params
  const context = useContext(LevyContext);
  const { categoryData, ipTemp, setIsLoading } = context
  const [deleteModal, setDeleteModal] = useState(false);
  const [alertModal, setAlertModal] = useState('');


  const deleteBudget = async (id, category) => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const response = await fetch(`http://${ipTemp}:5000/budget/deleteCategoryBudget?id=${id}&category=${category}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token
          },
        })
        const json = await response.json();
        if (json && json.success) {
          return true;
        }
      }
      return false;
    } catch (error) {
      console.log(error);
      alert("Some error occured");
    }
    setIsLoading(false);
  }

  const handleDeleteBudget = () => {
    const deleteStatus = deleteBudget(budget.budgetId,budget.category);
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
    <SafeAreaView className="flex-1 bg-light-100">
      <TopHeader navigation={navigation} title={'Detail Budget'} theme={"light"} />
      <View className="flex-1">
        <View className="flex-1 my-[16px]">
          <View className="flex flex-col px-[32px] items-center gap-[32px]">
            <View className="p-[16px] border-[1px] border-light-40 rounded-[24px] flex flex-row gap-[8px] items-center">
              <View
                style={{
                  backgroundColor: categoryData[budget.category]?.color
                }}
                className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center">
                <Image
                  className="w-[18px] h-[18px]"
                  source={categoryData[budget.category]?.image}
                />
              </View>
              <Text className="text-[18px] font-inter-semibold">{budget.category}</Text>
            </View>
            <View className="flex flex-col gap-[4px] items-center">
              <Text className="text-[24px] font-inter-semibold">Remaining</Text>
              <Text className="text-[64px] text-center font-inter-semibold">&#8377;{budget.expense > budget.budgetAmount ? 0 : budget.budgetAmount - budget.expense}</Text>
            </View>
          </View>
          {!deleteModal && <AnimatedBar budget={budget} />}

        </View>
        <View className="flex w-full flex-row items-center justify-between gap-[20px] p-[16px]">
          <Pressable
            onPress={() => {
              setDeleteModal(true)
            }}
            className="flex-1 py-[17px] flex items-center bg-violet-20 rounded-[16px]">
            <Text className="text-violet-100 text-[18px] font-inter-semibold">Delete</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("editBudget",{budegt : {budget}});
            }}
            className="flex-1 py-[17px] flex items-center bg-violet-100 rounded-[16px]">
            <Text className="text-light-100 text-[18px] font-inter-semibold">Edit</Text>
          </Pressable>
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
              <Text className="font-inter-semibold text-[18px]">Remove this Budget?</Text>
              <Text className=" py-[20px] text-light-20 font-inter-medium text-[16px] text-center">Are you sure do you wanna Remove this budget?</Text>
            </View>
            <View className="flex w-full flex-row items-center justify-between gap-[20px]">
              <Pressable
                onPress={() => {
                  setDeleteModal(false)
                }}
                className="flex-1 py-[17px] flex items-center bg-violet-20 rounded-[16px]">
                <Text className="text-violet-100 text-[18px] font-inter-semibold">No</Text>
              </Pressable>
              <Pressable
              onPress={()=>{
                handleDeleteBudget()
              }}
                className="flex-1 py-[17px] flex items-center bg-violet-100 rounded-[16px]">
                <Text className="text-light-100 text-[18px] font-inter-semibold">Yes</Text>
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
            <Text className="text-[14px] font-inter-medium">Budget has been deleted successfully</Text>
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
            <Text className="text-[14px] font-inter-medium">Budget Deletion failed!</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  )
}





const AnimatedBar = ({ budget }) => {

  const animatedWidth = useSharedValue(0); // Start from 0%

  useEffect(() => {
    animatedWidth.value = withTiming(budget.percentage, { duration: 1000 }); // Animate to target %
  }, [budget.percentage]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${animatedWidth.value}%`, // Convert to percentage width
  }));

  return (
    <View className="flex flex-col  items-center gap-[32px] px-[32px] pt-[32px]">
      <View className="w-full h-[12px] rounded-[10px] overflow-hidden bg-light-60">
        <Animated.View className="h-full rounded-[10px]" style={[animatedStyle, { backgroundColor: budget.color }]} />
      </View>
      {
        budget.expense > budget.budgetAmount && <View className="flex flex-row items-center px-[8px] py-[4px] bg-red-100 gap-[8px] rounded-[24px]">
          <Image
            className="w-[32px] h-[32px]"
            source={require('../../../assets/images/warningWhite.png')}
          />
          <Text className="text-[14px] font-inter text-light-100 pr-[8px]">You’ve exceed the limit!
          </Text>
        </View>
      }
    </View>
  );
};