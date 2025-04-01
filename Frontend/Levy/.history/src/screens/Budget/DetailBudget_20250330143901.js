import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { Image, Text, View } from 'react-native'
import LevyContext from '../../context/LevyContext'

export default function DetailBudget({ navigation, route }) {
  const { budget } = route.params
  console.log(budget)
  const context = useContext(LevyContext);
  const { categoryData } = context
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <TopHeader navigation={navigation} title={'Detail Budget'} theme={"light"} />
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
      </View>
    </SafeAreaView>
  )
}





const AnimatedBar = ({ category, percentage, color, budget, navigation }) => {

  const animatedWidth = useSharedValue(0); // Start from 0%

  useEffect(() => {
    animatedWidth.value = withTiming(percentage, { duration: 1000 }); // Animate to target %
  }, [percentage]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${animatedWidth.value}%`, // Convert to percentage width
  }));

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('detailBudget', { budget: budget });
      }}
      className="flex flex-col  items-center gap-[5px] p-[16px]">
      <View className="flex w-full flex-row items-center justify-between">
        <View className="flex flex-col gap-[8px] items-start">
          <View className="flex flex-row gap-[7px] border-[1px] border-light-60 p-[8px] rounded-[32px] items-center">
            <View className="w-[14px] h-[14px] rounded-full" style={{ backgroundColor: color }}></View>
            <Text className="text-[14px] font-medium pr-[4px]">{category}</Text>
          </View>
          <Text className="text-[24px] font-inter-semibold">Remaining &#8377; {budget.expense < budget.budgetAmount ? budget.budgetAmount - budget.expense : 0}</Text>
        </View>
        {
          budget.expense > budget.budgetAmount && <Image
            className="h-[32px] w-[32px]"
            source={require('../../assets/images/warning.png')}
          />
        }
      </View>
      <View className="w-full h-[12px] rounded-[10px] overflow-hidden bg-light-60">
        <Animated.View className="h-full rounded-[10px]" style={[animatedStyle, { backgroundColor: color }]} />
      </View>
      <View className="w-full">
        <Text className="text-[16px] font-inter-medium text-light-20">&#8377;{budget.expense} of &#8377;{budget.budgetAmount}</Text>
      </View>
      {
        budget.expense > budget.budgetAmount && <View className="w-full">
          <Text className="text-[14px] font-inter text-red-100">You’ve exceed the limit!
          </Text>
        </View>
      }
    </Pressable>
  );
};