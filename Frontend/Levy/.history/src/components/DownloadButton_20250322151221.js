import * as FileSystem from 'expo-file-system';
import { View, Button, Alert } from 'react-native';

const downloadImage = async () => {
    try {
        const imageUrl = 'https://picsum.photos/536/354'; // Replace with your image URL
        const fileName = `downloaded_image_${Date.now()}.jpg`;
        const fileUri = `${FileSystem.documentDirectory}${fileName}`;

        // Download Image
        const { uri } = await FileSystem.downloadAsync(imageUrl, fileUri);

        Alert.alert('Download Successful', `Image saved at: ${uri}`);
        console.log('File saved to:', uri);
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
