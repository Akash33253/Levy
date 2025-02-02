import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';


const DropdownSelect = ({ options, selectedValue, onValueChange, name }) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item) => {
    onValueChange(item);
    setVisible(false);
  };

  return (
    <View className="w-full">
      {/* Dropdown button */}
      <TouchableOpacity
        className="px-4 py-3 border border-gray-400 rounded-lg bg-white shadow-md"
        onPress={() => setVisible(true)}
      >
        <Text className="text-gray-700 font-medium">
          {selectedValue || 'Select an option'}
        </Text>
      </TouchableOpacity>

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
