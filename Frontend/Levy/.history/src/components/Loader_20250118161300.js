import React, { useContext } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import LevyContext from '../context/LevyContext';
export default function Loader() {
    const context = useContext(LevyContext)
    const {isLoading, setIsLoading} = useContext(context);
    return (
        <
    )
}
