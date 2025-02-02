import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/TopHeader'

export default function Home({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-light-100">
      <Gradi className="bg-gradient-to-t from-[#ffb732] to-[#181102] h-[300px] w-full">

      </Gradi>
    </SafeAreaView>
  )
}
