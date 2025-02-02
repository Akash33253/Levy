import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../../components/Footer'
import { ScrollView } from 'react-native-gesture-handler'

export default function Transaction({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-light-100">
        <View className="flex-1">
            <ScrollView 
            showsVerticalScrollIndicator={false}>
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ut fugiat nobis, sint modi assumenda molestiae voluptatibus deleniti beatae dicta temporibus distinctio optio saepe expedita laboriosam eveniet quasi, dignissimos, nihil perspiciatis quae incidunt. Magni ducimus maiores cupiditate impedit, nisi ullam mollitia eius quae illo blanditiis perspiciatis deserunt vitae possimus exercitationem a delectus, amet nesciunt voluptates dignissimos. Placeat similique architecto perferendis, quasi doloribus iure hic, a labore, optio porro obcaecati perspiciatis libero delectus assumenda earum explicabo voluptatum illum. Porro recusandae, odio natus nulla odit eligendi quod rerum illum alias nesciunt nemo, eveniet magnam sapiente nam atque. Corporis odio quas quam facilis sapiente? Voluptatibus eius totam veritatis nesciunt dignissimos esse earum debitis! Explicabo impedit nesciunt quasi necessitatibus debitis totam id quo nemo quia, adipisci voluptatem ratione repellendus sequi hic quod, corrupti a ab, maxime architecto assumenda! Deleniti in, sint mollitia obcaecati delectus dolore dicta inventore corporis, quos quod alias accusamus amet beatae modi. Nemo, veritatis voluptatem sed eveniet, iste quo dolor, consectetur reprehenderit quaerat distinctio amet quos reiciendis vitae qui repudiandae dolores repellat error fugit. Qui consequatur sequi quibusdam illo architecto eveniet incidunt quisquam quae impedit amet, dicta provident temporibus, suscipit minima, magnam eligendi aperiam tenetur optio neque? Ipsum maiores reprehenderit sunt.
                </Text>

            </ScrollView>
        </View>
        <Footer navigation={navigation} color={"#FFFFFF"}/>
    </SafeAreaView>
  )
}
