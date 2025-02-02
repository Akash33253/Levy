import React, { useContext } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import LevyContext from '../context/LevyContext';
export default function Loader() {
    const context = useContext(LevyContext)
    const {isLoading, setIsLoading} = context;
    return (
        <View>
            <Text>Loading</Text>
        </View>
    )
}
