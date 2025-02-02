import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';


const DropdownSelect = () => {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Select an option');

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity 
            onPress={openMenu} 
            className="px-4 py-3 border border-gray-400 rounded-lg bg-white shadow-md"
          >
            <Text className="text-gray-700 font-medium">{selectedValue}</Text>
          </TouchableOpacity>
        }
      >
        <Menu.Item 
          onPress={() => {
            setSelectedValue('Option 1');
            closeMenu();
          }} 
          title="Option 1" 
        />
        <Divider />
        <Menu.Item 
          onPress={() => {
            setSelectedValue('Option 2');
            closeMenu();
          }} 
          title="Option 2" 
        />
        <Divider />
        <Menu.Item 
          onPress={() => {
            setSelectedValue('Option 3');
            closeMenu();
          }} 
          title="Option 3" 
        />
      </Menu>
    </View>
  );
};

export default DropdownSelect;
