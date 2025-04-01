import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { View, Button, Alert } from 'react-native';

const testExpoSharing = async () => {
    try {
        // Define file path
        const fileName = 'TestFile.txt';
        const fileUri = `${FileSystem.cacheDirectory}${fileName}`;

        // Write some sample content to the file
        await FileSystem.writeAsStringAsync(fileUri, 'Hello, Expo Sharing Test!', {
            encoding: FileSystem.EncodingType.UTF8,
        });

        // Ensure sharing is available
        if (!(await Sharing.isAvailableAsync())) {
            Alert.alert('Error', 'Sharing is not available on this device.');
            return;
        }

        // Share the test file
        await Sharing.shareAsync(fileUri);
    } catch (error) {
        console.error('Sharing error:', error);
        Alert.alert('Error', 'Failed to share the test file.');
    }
};

const ShareTestButton = () => {
    return (
        <View style={{ margin: 20 }}>
            <Button title="Test Expo Sharing" onPress={testExpoSharing} />
        </View>
    );
};

export default ShareTestButton;
