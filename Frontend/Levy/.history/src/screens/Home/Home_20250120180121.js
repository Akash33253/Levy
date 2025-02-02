import React, { useContext } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';
import LevyContext from '../../context/LevyContext';

export default function Home({ navigation }) {
  const context = useContext(LevyContext);
  const { user } = context;
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <LinearGradient
        colors={['#FFF6E5', '#FFFFFF']}
        className="rounded-b-[40px]"
      >
        <View className="w-full p-[20px] relative items-center justify-center flex flex-col rounded-b-[40px]">
          <View className=" w-full flex flex-row items-center">
            <Text className="text-dark-50 font-medium text-[24px] ">Hi, {user?.name}</Text>
            <Pressable className="ml-auto flex flex-row items-center pl-[10px] pr-[16px] py-[8px] rounded-[40px] border-[1px] border-light-60 gap-[3px]">
              <Image
                className="w-[24px] h-[24px] mt-[4px]"
                source={require("../../../assets/images/arrowDown.png")}
              />
              <Text className="text-dark-50 font-medium text-[14px]">October</Text>
            </Pressable>
          </View>
          <View className="flex flex-col w-full items-center justify-center mt-[20px] gap-[9px]">
            <Text className="text-light-20 text-[14px] font-medium">Total Expense</Text>
            <Text className="text-dark-75 font-semibold text-[40px]">&#8377; 1000</Text>
          </View>
          <Pressable className="mt-[30px] py-[16px] px-[24px] flex flex-row items-center justify-center gap-[8px] bg-red-100 rounded-[28px]">
            <Image
              className="w-[48px] h-[48px]"
              source={require("../../../assets/images/expenseIcon.png")}
            />
            <View className="flex flex-col gap-[3px]">
              <Text className="text-light-80 text-[14px] font-medium">Add Expense</Text>
              <Text className="text-light-80 text-[22px] font-semibold">&#8377; 000</Text>
            </View>
          </Pressable>
        </View>
      </LinearGradient>
      <View className="flex-1">
        <LinearGradient
          colors={['#FFFFFF', '#FFF6E5']}
        >
          
          {/* <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi temporibus error veniam voluptas unde iure quibusdam laudantium, aut similique eligendi non sed excepturi aliquid illo inventore deserunt necessitatibus cumque incidunt assumenda in ipsam quo cum velit veritatis. Iste, nam sapiente, unde temporibus quae optio minus quam possimus deserunt eos neque assumenda tempore delectus officiis autem? Inventore facere nobis itaque sunt praesentium ad enim minus non tempora. Libero, sint eveniet! Aperiam laboriosam deserunt facere nam, non repudiandae iste voluptatum expedita obcaecati dignissimos, vel ab reiciendis accusantium veritatis dolorum illo a. Culpa obcaecati perferendis corporis soluta, molestiae porro facere odio reprehenderit ut provident qui minus, nisi repellat. Beatae enim neque earum et expedita! Quas dolorum impedit quibusdam maiores vitae, fugit consequatur ratione porro qui itaque nam voluptatum, sint, fugiat vel non voluptatem ducimus saepe voluptates suscipit. Minus praesentium officia neque adipisci vitae suscipit deleniti magni, aperiam sapiente architecto impedit dolore tempore voluptatibus earum exercitationem doloremque aspernatur reprehenderit iusto provident est rem dignissimos. Velit cumque quam unde cum. Consectetur itaque, soluta vero, doloremque accusantium eveniet error harum molestiae dolorem cumque distinctio. Explicabo voluptatibus debitis officia autem deleniti sed tenetur qui sunt neque, fugiat eos dolore aperiam, excepturi ab id culpa dolorum non similique iste esse veritatis pariatur optio accusamus cupiditate. Repellendus eum esse vitae maiores reiciendis exercitationem inventore laboriosam provident amet. Nisi repellat eaque repudiandae consectetur nemo sapiente placeat eum quod quidem officiis suscipit saepe commodi rerum eligendi, neque tenetur quasi veritatis officia ducimus. Harum error quaerat ducimus minima minus, nam ipsum sunt ad, veniam cum laudantium explicabo esse deleniti molestias animi at optio iusto? Eos cum soluta natus magni possimus quam veniam voluptatem eaque at earum nam ut sit eius in, impedit expedita qui? Vitae minima, nam harum doloremque molestias dolor similique commodi officia hic exercitationem deserunt voluptas eligendi animi accusantium labore eos neque, aliquid ea. Nobis blanditiis neque ipsum nam inventore magnam deserunt, repudiandae repellat fuga perspiciatis harum natus dolores totam laudantium velit. Commodi, ipsum cumque quae beatae repudiandae ducimus mollitia laudantium qui rerum quisquam minus? Ad nisi quia adipisci earum at vel repellendus, ut ullam natus cupiditate rem quisquam quam soluta dolorum, sit exercitationem quas consequatur nulla commodi rerum veritatis incidunt. Fugit rerum quos suscipit aut iste deleniti sint possimus ullam ducimus? Enim quae quod perspiciatis odit architecto odio explicabo cupiditate voluptatibus impedit molestias ad et, iste minus hic quidem corporis. Rerum adipisci neque officia voluptate quaerat eveniet cupiditate dolorem perferendis assumenda, deleniti quasi tenetur maxime voluptatem provident possimus reprehenderit culpa est praesentium eius ratione! Error autem vitae nihil minus quo earum possimus illum numquam repellendus aperiam dolorem, dolorum totam ipsam hic debitis id voluptatibus beatae dolore quasi, qui, nam in. Corporis nulla sit, repellendus, quae id aliquid velit deserunt eos qui ad libero maxime dicta! Nulla praesentium error aspernatur temporibus amet veniam ab velit qui unde quia nisi, architecto iusto? Alias doloribus nam tempora eveniet, ipsa provident deleniti tempore minima rerum iste, nostrum reprehenderit, accusamus ipsum aut quo quia quasi sunt quae odio laborum dicta perferendis veniam in. Placeat?
            </Text>
          </ScrollView> */}
        </LinearGradient>
      </View>
    </SafeAreaView>
  )
}
