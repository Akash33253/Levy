import React from 'react'
import { Text, View } from 'react-native'

export default function TopHeader({title}) {
  return (
    <View className="p-[16px]">
        
        <Text>{title}</Text>
    </View>
  )
}
