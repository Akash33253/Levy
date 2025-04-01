import React from 'react';
import { View, Button, Alert, Platform, PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';



const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to storage to download images.',
            buttonPositive: 'OK',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; // iOS does not need permission
  };
const downloadImage = async () => {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
        Alert.alert('Permission Denied', 'Cannot save image without permission.');
        return;
    }

    const imageUrl = 'https://via.placeholder.com/150'; // Replace with actual image URL
    const fileName = `downloaded_image_${Date.now()}.jpg`;
    const filePath = `${RNFS.DownloadDirectoryPath}/${fileName}`;

    try {
        const response = await RNFS.downloadFile({
            fromUrl: imageUrl,
            toFile: filePath,
        }).promise;

        if (response.statusCode === 200) {
            Alert.alert('Download Successful', `Image saved at: ${filePath}`);
            console.log('File saved to:', filePath);
        } else {
            Alert.alert('Download Failed', 'Something went wrong.');
        }
    } catch (error) {
        console.error('Download error:', error);
        Alert.alert('Error', 'Failed to download image.');
    }
};

const DownloadButton = () => {
    return (
        <View style={{ margin: 20 }}>
            <Button title="Download Image" onPress={downloadImage} />
        </View>
    );
};

export default DownloadButton;
