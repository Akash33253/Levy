import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Pressable, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function MonthYearPicker({ selectedMonthYear, onValueChange }) {
    const [visible, setVisible] = useState(false);
    const monthShortNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const monthNumbers = {
        Jan: "1",
        Feb: "2",
        Mar: "3",
        Apr: "4",
        May: "5",
        Jun: "6",
        Jul: "7",
        Aug: "8",
        Sep: "9",
        Oct: "10",
        Nov: "11",
        Dec: "12"
    };

    const handleSelect = (item) => {
        onValueChange(item);
        setVisible(false);
    };

    return (
        <View className="w-full">
            {/* Dropdown button */}
            <Pressable
                className="w-full flex flex-row justify-between items-center"
                onPress={() => setVisible(true)}
            >
                <Text className={`text-[16px] font-normal ${selectedMonthYear.month === '' ? 'text-light-20' : 'text-black'}`}>
                    {selectedMonthYear.month || name}
                </Text>
                <Image
                    className="w-[32px] h-[32px]"
                    source={require('../../assets/images/dropDown.png')}
                />
            </Pressable>

            {/* Modal for dropdown options */}
            <Modal transparent animationType="fade" visible={visible}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setVisible(false)}
                    className="flex-1 bg-black/50 justify-center items-center"
                >
                    <View className="w-4/5 max-h-[300px] bg-white rounded-lg shadow-lg">
                        <View>
                            <TextInput
                                className="w-full text-[18px] text-dark-50 font-semibold"
                                value={selectedMonthYear.year}
                                placeholder='0000'
                                placeholderTextColor={"#FCFCFC"}
                                keyboardType='number-pad'
                                onChangeText={(text) => {
                                    onValueChange({
                                        month : '',
                                        year : ''
                                    })
                                }
                                }
                            ></TextInput>
                        </View>
                        <FlatList
                            data={monthShortNames}
                            keyExtractor={(item) => item}
                            showsVerticalScrollIndicator={true}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    className="p-4 border-b border-gray-200"
                                    onPress={() => handleSelect(item)}
                                >
                                    <Text className={`text-gray-800`}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

