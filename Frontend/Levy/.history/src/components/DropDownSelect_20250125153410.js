import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DropdownSelect = () => {
  const tailwind = useTailwind();
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={tailwind('p-4')}>
      <Text style={tailwind('text-lg font-bold mb-2')}>Select an Option:</Text>
      <View style={tailwind('border border-gray-300 rounded-lg')}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={tailwind('text-lg p-2')}
        >
          <Picker.Item label="Select an option..." value="" />
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
      <Text style={tailwind('mt-4 text-base')}>
        Selected: {selectedValue || 'None'}
      </Text>
    </View>
  );
};

export default DropdownSelect;
