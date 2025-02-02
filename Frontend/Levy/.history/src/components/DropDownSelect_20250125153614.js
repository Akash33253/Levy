import React, { useState } from 'react';
import { View, Text } from 'react-native';


const DropdownSelect = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-2">Select an Option:</Text>
      <View className="border border-gray-300 rounded-lg">
        <Picke
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          className="text-lg p-2"
        >
          <Picker.Item label="Select an option..." value="" />
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picke>
      </View>
      <Text className="mt-4 text-base">
        Selected: {selectedValue || 'None'}
      </Text>
    </View>
  );
};

export default DropdownSelect;
