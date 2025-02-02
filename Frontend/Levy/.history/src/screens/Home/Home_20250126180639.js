import React, { useCallback, useContext, useEffect } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import LevyContext from '../../context/LevyContext';
import Footer from '../../components/Footer';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation }) {
  const context = useContext(LevyContext);
  const { getRecentExpenses } = context;

  useFocusEffect(
    useCallback(() => {
      getRecentExpenses();
    }, [])
  );
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <View className="flex-1">
        <LinearGradient
          colors={['#FFF6E5', '#FFFFFF']}
          className="rounded-b-[40px]"
        >
          <View className="w-full p-[20px] relative items-center justify-center flex flex-col rounded-b-[40px]">
            <View className=" w-full flex flex-row items-center">
              <Pressable
                onPress={() => {
                  navigation.navigate("profileMenu")
                }}
                className="w-[40px] h-[40px] bg-light-100 rounded-full flex items-center justify-center">
                <Image
                  className="w-[30px] h-[30px]"
                  source={require('../../../assets/images/profile.png')}
                />
              </Pressable>
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
            <Pressable
              onPress={() => {
                navigation.navigate("addExpense")
              }}
              className="mt-[30px] py-[16px] px-[24px] flex flex-row items-center justify-center gap-[8px] bg-red-100 rounded-[28px]">
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
        <View className="flex-1 mt-[40px]">
          <LinearGradient
            colors={['#FFFFFF', '#FFF6E5']}
            className="flex-1 justify-between"
          >
            <View className="flex flex flex-col gap-[8px]">
              <View className="w-full px-[16px] flex flex-row justify-between items-center">
                <Text className="text-dark-25 text-[18px] font-semibold">Recent Expenses</Text>
                <Pressable className="px-[16px] py-[7px] rounded-[40px] bg-violet-20">
                  <Text className="text-violet-100 text-[14px] font-medium">See All</Text>
                </Pressable>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, et, eligendi sed dolor officia suscipit ipsum fuga laudantium commodi quis illum deserunt culpa, error praesentium dolore sequi similique cum odio sint? Odit, est praesentium nobis atque fugiat id quam dolorum veritatis beatae iusto deleniti quae et possimus laborum eaque tempora deserunt animi nihil. Itaque nobis expedita, eius at aspernatur distinctio dicta pariatur dolore perferendis blanditiis sit sed quasi sapiente non fuga temporibus ab nisi deleniti omnis beatae? Veniam, ducimus aliquid. Ad aspernatur cum accusantium amet enim. Facilis, enim possimus. Ipsa minus assumenda error recusandae rerum autem obcaecati perspiciatis, consequatur consequuntur iure cupiditate reiciendis alias ipsum, quo pariatur officiis necessitatibus explicabo nisi eligendi? Aut, cum necessitatibus! Aperiam repudiandae soluta aut ut provident deleniti eum dolorem suscipit? Inventore illum praesentium eum sit veritatis quia ab voluptas fugiat excepturi. Veniam, facere corrupti. Quo deleniti laborum eligendi laudantium impedit, fugit iste aut quia doloremque ut totam, beatae quod quibusdam dolore qui error placeat aperiam. Fugit excepturi impedit doloribus mollitia. Quis suscipit harum qui voluptates blanditiis ullam, eos quo perferendis asperiores! Tempore pariatur recusandae quidem vero, libero delectus harum perspiciatis error. Modi blanditiis, asperiores ex quos quia ipsum ipsa amet, ipsam, pariatur quis quibusdam similique dolorum? In voluptatibus similique et expedita obcaecati tempora voluptates ducimus adipisci accusamus. Nihil blanditiis, magnam iusto aliquam cum explicabo molestias, exercitationem, quia ratione libero repellendus voluptatibus molestiae. Odit, nesciunt harum! Delectus ipsa dolorem nostrum molestias reiciendis cupiditate ipsum libero laudantium dolorum nesciunt? Dolorum ab pariatur, quis earum assumenda corrupti aspernatur. Est minima voluptatum aperiam possimus. Deserunt distinctio, vel magnam asperiores praesentium ea, autem ipsa, et a recusandae dicta possimus aperiam deleniti totam nostrum in impedit. Minima fugiat reprehenderit aliquam? Ullam repudiandae veniam dolore inventore. Laborum labore ducimus sequi quos quae beatae rem, in dolorum qui autem est ratione perspiciatis a quidem animi omnis temporibus voluptates fuga doloremque! Laudantium dolorem nobis error itaque pariatur, eius minus quidem dolore incidunt necessitatibus quis ea commodi quo perspiciatis sunt, similique odit voluptatum accusamus ducimus doloribus. Repudiandae minima, suscipit soluta id placeat exercitationem distinctio cupiditate quas corporis quos doloremque laboriosam numquam voluptatibus nihil quis eligendi a vero laudantium reiciendis, maxime fugiat pariatur dolor aliquid et. Officiis sit quasi ducimus, laborum ipsa voluptates, accusantium error magni omnis, ut non. Deleniti dolore eum, ipsum expedita explicabo deserunt asperiores doloribus iusto repellendus. Deserunt quae iure, incidunt soluta facilis ratione animi accusantium consectetur similique, id, deleniti laborum dicta fugiat! Libero magnam cupiditate sunt, corporis corrupti neque exercitationem accusantium praesentium molestiae placeat facere et, quisquam expedita debitis odit molestias! Iusto repellat, alias tempora nemo temporibus molestiae ullam odio iste facilis tempore sunt consectetur, quia veniam voluptatem accusamus corrupti porro repellendus numquam incidunt itaque maiores quibusdam? Assumenda illum rerum cum, voluptate eveniet quis commodi quaerat, minima consectetur quam enim distinctio quas eius accusamus laborum voluptas perspiciatis tempora modi asperiores saepe fugiat. Vero, soluta, sed reiciendis exercitationem obcaecati, facilis debitis iste laudantium temporibus perferendis voluptatum. At dolore harum aliquid ducimus iusto, explicabo debitis magnam unde, animi quibusdam temporibus voluptate minus. Sunt, quod?</Text>
              </ScrollView>
            </View>
            <Footer navigation={navigation} color={"#FFF6E5"} />
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  )
}
