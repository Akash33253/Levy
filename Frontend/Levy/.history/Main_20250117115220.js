import { NavigationContainer } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Text, View } from 'react-native'

export default function Main() {
    const navigationContianerRef = useRef();
  return (
    <>
     <NavigationContainer ref={navigationContianerRef}>

     </NavigationContainer>
    </>
  )
}
