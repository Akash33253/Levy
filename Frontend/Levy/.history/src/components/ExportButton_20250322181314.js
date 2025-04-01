import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import XLSX from 'xlsx';
import { View, Button, Alert, Platform, PermissionsAndroid } from 'react-native';

// Request storage permissions (only needed for Android 10 and below)
const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; // iOS does not need permission
};

const exportToExcel = async (expenses) => {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
        Alert.alert('Permission Denied', 'Please allow access to save files.');
        return;
    }

    try {
        // Convert expenses to a worksheet
        const worksheet = XLSX.utils.json_to_sheet(expenses);

        // Create a workbook and append the worksheet
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Expenses');

        // Write Excel file and get Base64 data
        const excelBase64 = XLSX.write(workbook, { type: 'base64', bookType: 'xlsx' });

        // Define the file path (Use Downloads folder on Android)
        const fileName = `Expenses_${Date.now()}.xlsx`;
        const fileUri =
            Platform.OS === 'android'
                ? `${FileSystem.StorageAccessFramework.getUriForDirectoryAsync('Download')}/${fileName}`
                : `${FileSystem.documentDirectory}${fileName}`; // iOS uses documentDirectory

        // Save Base64-encoded Excel file
        await FileSystem.writeAsStringAsync(fileUri, excelBase64, {
            encoding: FileSystem.EncodingType.Base64,
        });

        Alert.alert('Download Successful', `Excel file saved at: ${fileUri}`);
    } catch (error) {
        console.error('Export error:', error);
        Alert.alert('Error', 'Failed to save Excel file.');
    }
};

const ExportButton = ({ expenses }) => {
    return (
        <View style={{ margin: 20 }}>
            <Button title="Export to Excel" onPress={() => exportToExcel(expenses)} />
        </View>
    );
};

export default ExportButton;
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import XLSX from 'xlsx';
import { View, Button, Alert, Platform } from 'react-native';
import DownloadButton from './DownloadButton';

const exportToExcel = async (expenses) => {
    // Request media library permissions
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Please allow access to save files.');
        return;
    }

    try {
        // Convert expenses to a worksheet
        const worksheet = XLSX.utils.json_to_sheet(expenses);

        // Create a workbook and append the worksheet
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Expenses');

        // Write Excel file and get Base64 data
        const excelBase64 = XLSX.write(workbook, { type: 'base64', bookType: 'xlsx' });

        // Define a temporary file path
        const fileName = `Expenses_${Date.now()}.xlsx`;
        const fileUri = `${FileSystem.cacheDirectory}${fileName}`; // Temporary cache directory

        // Write Base64 encoded Excel file to the cache directory
        await FileSystem.writeAsStringAsync(fileUri, excelBase64, {
            encoding: FileSystem.EncodingType.Base64,
        });

        // Ensure file exists before moving it to Downloads
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (!fileInfo.exists) {
            throw new Error('File was not created successfully.');
        }

        // Move the file to the Downloads folder using MediaLibrary
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        await MediaLibrary.createAlbumAsync('Download', asset, false);

        Alert.alert('Download Successful', 'Excel file saved to Downloads folder!');
    } catch (error) {
        console.error('Export error:', error);
        Alert.alert('Error', 'Failed to save Excel file.');
    }
};

const ExportButton = () => {
    return (
        <View style={{ margin: 20 }}>
            <Button title="Export to Excel" onPress={() => exportToExcel(expenses)} />
        </View>
    );
};

export default ExportButton;

const expenses = [

    {
        "_id": "67de815c366f26fc9ef97143",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 10,
        "description": "new",
        "category": "Rent",
        "wallet": "Paytm",
        "date": "2025-03-22T09:22:36.090Z",
        "createdAt": "2025-03-22T09:22:36.091Z",
        "updatedAt": "2025-03-22T09:22:36.091Z",
        "__v": 0
    },
    {
        "_id": "679e5a6a134bacd8ae57b293",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 500,
        "description": "transport from mzp to delhi",
        "category": "Transport",
        "wallet": "Paytm",
        "date": "2025-02-01T17:31:22.956Z",
        "createdAt": "2025-02-01T17:31:22.965Z",
        "updatedAt": "2025-02-01T17:31:22.965Z",
        "__v": 0
    },
    {
        "_id": "679e2fc0a04cb83c5921f93c",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 800,
        "description": "random loss",
        "category": "Miscellaneous",
        "wallet": "Cash",
        "date": "2025-02-01T14:29:20.480Z",
        "createdAt": "2025-02-01T14:29:20.481Z",
        "updatedAt": "2025-02-01T14:29:20.481Z",
        "__v": 0
    },
    {
        "_id": "679e2f99a04cb83c5921f933",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 700,
        "description": "home decor",
        "category": "Personal",
        "wallet": "Cash",
        "date": "2025-02-01T14:28:41.154Z",
        "createdAt": "2025-02-01T14:28:41.154Z",
        "updatedAt": "2025-02-01T14:28:41.154Z",
        "__v": 0
    },
    {
        "_id": "679e2f88a04cb83c5921f92f",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 600,
        "description": "Sip investment",
        "category": "Investment",
        "wallet": "PhonePe",
        "date": "2025-02-01T14:28:24.766Z",
        "createdAt": "2025-02-01T14:28:24.767Z",
        "updatedAt": "2025-02-01T14:28:24.767Z",
        "__v": 0
    },
    {
        "_id": "679e2f5ea04cb83c5921f926",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 500,
        "description": "new tshirt",
        "category": "Shopping",
        "wallet": "Paytm",
        "date": "2025-02-01T14:27:42.913Z",
        "createdAt": "2025-02-01T14:27:42.914Z",
        "updatedAt": "2025-02-01T14:27:56.753Z",
        "__v": 0
    },
    {
        "_id": "679e2f52a04cb83c5921f922",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 400,
        "description": "emetricty bill",
        "category": "Bill",
        "wallet": "Gpay",
        "date": "2025-02-01T14:27:30.703Z",
        "createdAt": "2025-02-01T14:27:30.704Z",
        "updatedAt": "2025-02-01T14:27:30.704Z",
        "__v": 0
    },
    {
        "_id": "679e2f44a04cb83c5921f91e",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 300,
        "description": "home rent",
        "category": "Rent",
        "wallet": "PhonePe",
        "date": "2025-02-01T14:27:16.057Z",
        "createdAt": "2025-02-01T14:27:16.057Z",
        "updatedAt": "2025-02-01T14:27:16.057Z",
        "__v": 0
    },
    {
        "_id": "679e2f32a04cb83c5921f91a",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 200,
        "description": "new transport auto",
        "category": "Transport",
        "wallet": "PhonePe",
        "date": "2025-02-01T14:26:58.653Z",
        "createdAt": "2025-02-01T14:26:58.654Z",
        "updatedAt": "2025-02-01T14:26:58.654Z",
        "__v": 0
    },
    {
        "_id": "679e2f24a04cb83c5921f916",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 100,
        "description": "food ",
        "category": "Food",
        "wallet": "Cash",
        "date": "2025-02-01T14:26:44.407Z",
        "createdAt": "2025-02-01T14:26:44.413Z",
        "updatedAt": "2025-02-01T14:26:44.413Z",
        "__v": 0
    },
    {
        "_id": "679d0731b4dad6ab73ac1fc0",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 1500,
        "description": "new bill",
        "category": "Transport",
        "wallet": "Gpay",
        "date": "2025-01-31T17:24:01.476Z",
        "createdAt": "2025-01-31T17:24:01.484Z",
        "updatedAt": "2025-02-01T14:20:24.640Z",
        "__v": 0
    },
    {
        "_id": "679d02baa693e122cb3a8d16",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 1000,
        "description": "This is a test expense given in postman",
        "category": "Transport",
        "wallet": "Cash",
        "date": "2025-01-31T17:04:58.549Z",
        "createdAt": "2025-01-31T17:04:58.549Z",
        "updatedAt": "2025-01-31T17:21:26.028Z",
        "__v": 0
    },
    {
        "_id": "679d020ca693e122cb3a8d0a",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 110,
        "description": "wfg",
        "category": "Miscellaneous",
        "wallet": "Gpay",
        "date": "2025-01-31T17:02:04.881Z",
        "createdAt": "2025-01-31T17:02:04.881Z",
        "updatedAt": "2025-01-31T17:02:04.881Z",
        "__v": 0
    },
    {
        "_id": "679d0035a693e122cb3a8cf3",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 200,
        "description": "personal expense",
        "category": "Personal",
        "wallet": "Cash",
        "date": "2025-01-31T16:54:13.012Z",
        "createdAt": "2025-01-31T16:54:13.014Z",
        "updatedAt": "2025-01-31T16:54:13.014Z",
        "__v": 0
    },
    {
        "_id": "679640b6a21e5049ee9562e5",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 0,
        "description": "personal",
        "category": "Personal",
        "wallet": "PhonePe",
        "date": "2025-01-26T14:03:34.113Z",
        "createdAt": "2025-01-26T14:03:34.114Z",
        "updatedAt": "2025-01-26T14:03:34.114Z",
        "__v": 0
    },
    {
        "_id": "6796405da21e5049ee9562e2",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 10,
        "description": "investment",
        "category": "Investment",
        "wallet": "PhonePe",
        "date": "2025-01-26T14:02:05.483Z",
        "createdAt": "2025-01-26T14:02:05.484Z",
        "updatedAt": "2025-01-26T14:02:05.484Z",
        "__v": 0
    },
    {
        "_id": "67963e75a21e5049ee9562df",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 600,
        "description": "shopping",
        "category": "Shopping",
        "wallet": "Cash",
        "date": "2025-01-26T13:53:57.541Z",
        "createdAt": "2025-01-26T13:53:57.541Z",
        "updatedAt": "2025-01-26T13:53:57.541Z",
        "__v": 0
    },
    {
        "_id": "67963e62a21e5049ee9562dd",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 50,
        "description": "ne bill",
        "category": "Bill",
        "wallet": "Gpay",
        "date": "2025-01-26T13:53:38.985Z",
        "createdAt": "2025-01-26T13:53:38.986Z",
        "updatedAt": "2025-01-26T13:53:38.986Z",
        "__v": 0
    },
    {
        "_id": "67963e51a21e5049ee9562db",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 2000,
        "description": "new rent",
        "category": "Rent",
        "wallet": "Gpay",
        "date": "2025-01-26T13:53:21.250Z",
        "createdAt": "2025-01-26T13:53:21.251Z",
        "updatedAt": "2025-01-26T13:53:21.251Z",
        "__v": 0
    },
    {
        "_id": "67963e3da21e5049ee9562d9",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 1000,
        "description": "bus",
        "category": "Transport",
        "wallet": "Gpay",
        "date": "2025-01-26T13:53:01.378Z",
        "createdAt": "2025-01-26T13:53:01.380Z",
        "updatedAt": "2025-01-26T13:53:01.380Z",
        "__v": 0
    },
    {
        "_id": "67963abaa21e5049ee9562ad",
        "user": "678b5892d7cd274bfdf7e4d9",
        "amount": 50,
        "description": "Office food",
        "category": "Food",
        "wallet": "Cash",
        "date": "2025-01-26T13:38:02.071Z",
        "createdAt": "2025-01-26T13:38:02.076Z",
        "updatedAt": "2025-01-26T13:38:02.076Z",
        "__v": 0
    }
]