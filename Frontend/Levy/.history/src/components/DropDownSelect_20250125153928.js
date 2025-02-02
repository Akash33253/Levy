import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList,Modal } from 'react-native';
import Modal from 'react-native-modal';

const DropdownSelect = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleSelect = (value) => {
    setSelectedValue(value);
    setModalVisible(false);
  };

  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-2">Select an Option:</Text>
      <TouchableOpacity
        className="border border-gray-300 rounded-lg p-4 bg-white"
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-base">
          {selectedValue ? selectedValue : 'Select an option...'}
        </Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View className="bg-white p-4 rounded-lg">
          <Text className="text-lg font-bold mb-4">Choose an Option</Text>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="p-3 border-b border-gray-200"
                onPress={() => handleSelect(item.label)}
              >
                <Text className="text-base">{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>

      <Text className="mt-4 text-base">
        Selected: {selectedValue || 'None'}
      </Text>
    </View>
  );
};

export default DropdownSelect;
