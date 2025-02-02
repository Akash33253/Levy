import React, { useContext } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
export default function Loader() {
    const context = useContext(Lev)
    const {isLoading, setIsLoading} = useContext()
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isLoading}
            onRequestClose={() => {
                // Handle modal close, if needed
            }}
        >
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'relative'
            }}>
                <TouchableOpacity
                    onPress={() => {
                        // setIsLoading(false);
                    }}
                    style={{
                        position: 'absolute',
                        top: '5%',
                        right: '5%',
                    }}>
                    <Ionicons name="close" size={30} color="black" />
                </TouchableOpacity>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        </Modal>
    )
}
