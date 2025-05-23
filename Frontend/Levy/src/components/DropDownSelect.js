import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Pressable, Image } from 'react-native';

const DropdownSelect = ({ options, selectedValue, onValueChange, name }) => {
  const [visible, setVisible] = useState(false);

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
        <Text className={`text-[16px] font-inter ${selectedValue === '' ? 'text-light-20' : 'text-black'}`}>
          {selectedValue || name}
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
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={true}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="p-4 border-b border-gray-200"
                  onPress={() => handleSelect(item)}
                >
                  <Text className={`text-gray-800 ${selectedValue === item ? 'font-inter-bold' : 'font-inter'}`}>{item}</Text>
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
