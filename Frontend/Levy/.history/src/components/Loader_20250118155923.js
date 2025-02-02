import React from 'react'
import { View } from 'react-native'

export default function Loader() {
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
                        setIsLoading(false);
                    }}
                    style={{
                        position: 'absolute',
                        top: '5%',
                        right: '5%',
                    }}>

                    <Image
                        style={{
                            height: responsiveHeight(15 / 7.13),
                            width: responsiveWidth(15 / 3.6),
                            zIndex: 10
                        }}
                        source={require('../../assets/crossBlack.png')}
                    />
                </TouchableOpacity>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        </Modal>
  )
}
