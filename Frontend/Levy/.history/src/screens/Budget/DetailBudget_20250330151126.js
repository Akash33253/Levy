import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Image, Modal, Pressable, Text, View } from 'react-native'
import LevyContext from '../../context/LevyContext'
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export default function DetailBudget({ navigation, route }) {
  const { budget } = route.params
  const context = useContext(LevyContext);
  const { categoryData } = context
  const [deleteModal, setDeleteModal] = useState(false);
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
          {/* <AnimatedBar budget={budget} /> */}
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
              console.log("edit clicked")
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
              <Text className="font-inter-semibold text-[18px]">Delete</Text>
              <Text className=" py-[20px] text-light-20 font-inter-medium text-[16px] text-center">Are you sure do you wanna Delete this expense?</Text>
            </View>
            <View className="flex w-full flex-row items-center justify-between gap-[20px]">
              <Pressable
                onPress={() => {
                  setDeleteModal(false)
                }}
                className="flex-1 py-[17px] flex items-center bg-red-20 rounded-[16px]">
                <Text className="text-red-100 text-[18px] font-inter-semibold">No</Text>
              </Pressable>
              <Pressable
                className="flex-1 py-[17px] flex items-center bg-red-100 rounded-[16px]">
                <Text className="text-light-100 text-[18px] font-inter-semibold">Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
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