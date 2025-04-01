import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { View, Button, Alert } from 'react-native';

const downloadImage = async () => {
    // Request permission to save in the gallery
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Please allow access to save images.');
        return;
    }

    try {
        const imageUrl = 'https://picsum.photos/536/354'; // Replace with your image URL
        const fileName = `downloaded_image_${Date.now()}.jpg`;
        const fileUri = `${FileSystem.documentDirectory}${fileName}`;

        // Download Image
        const { uri } = await FileSystem.downloadAsync(imageUrl, fileUri);

        // Save to Gallery
        const asset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync('Download', asset, false); // Save in "Downloads" or "Pictures" folder

        Alert.alert('Download Successful', 'Image saved to Gallery!');
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
