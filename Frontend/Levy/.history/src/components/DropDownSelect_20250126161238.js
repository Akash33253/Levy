import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Pressable } from 'react-native';

const DropdownSelect = ({ options, selectedValue, onValueChange }) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item) => {
    onValueChange(item);
    setVisible(false);
  };

  return (
    <View className="w-full">
      {/* Dropdown button */}
      <Pressable
        onPress={() => setVisible(true)}
      >
        <Text className={`text-[16px] font-normal ${}`}>
          {selectedValue || 'Select an option'}
        </Text>
      </Pressable>

      {/* Modal for dropdown options */}
      <Modal transparent animationType="slide" visible={visible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setVisible(false)}
          className="flex-1 bg-black/50 justify-center items-center"
        >
          <View className="w-4/5 bg-white rounded-lg shadow-lg">
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="p-4 border-b border-gray-200"
                  onPress={() => handleSelect(item)}
                >
                  <Text className="text-gray-800">{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default DropdownSelect;
