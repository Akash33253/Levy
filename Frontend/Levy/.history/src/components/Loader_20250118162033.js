import React, { useContext } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import LevyContext from '../context/LevyContext';
export default function Loader() {
    const context = useContext(LevyContext)
    const { isLoading, setIsLoading } = context;
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isLoading}
        >
            <View className="flex-1 items-center justify-center relative bg-[rgba(0,0,0,0.5)]">
                <Ionicons
                    name='close'
                    size={30}
                />
            </View>
        </Modal>
    )
}
