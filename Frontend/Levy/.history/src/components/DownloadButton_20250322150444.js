import React from 'react';
import { View, Button, Alert } from 'react-native';
import RNFS from 'react-native-fs';

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
