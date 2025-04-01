import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { View, Button, Alert } from 'react-native';
import XLSX from 'exceljs';

const exportToExcel = async (expenses) => {
    // Request permission to access media storage
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Please allow access to save files.');
        return;
    }

    try {
        // Create a new Excel workbook
        const workbook = new XLSX.Workbook();
        const worksheet = workbook.addWorksheet('Expenses');

        // Define columns
        worksheet.columns = [
            { header: 'Date', key: 'date', width: 15 },
            { header: 'Category', key: 'category', width: 15 },
            { header: 'Description', key: 'description', width: 25 },
            { header: 'Amount', key: 'amount', width: 10 }
        ];

        // Add rows
        expenses.forEach(expense => {
            worksheet.addRow({
                date: new Date(expense.date).toLocaleDateString(),
                category: expense.category,
                description: expense.description,
                amount: expense.amount
            });
        });

        // Generate binary Excel file
        const fileUri = `${FileSystem.documentDirectory}Expenses_${Date.now()}.xlsx`;
        const fileBuffer = await workbook.xlsx.writeBuffer(); // Returns a Uint8Array

        // Convert Uint8Array to base64 for writing
        const base64Data = FileSystem.EncodingType.Base64.encode(new Uint8Array(fileBuffer));

        // Write the file using expo-file-system
        await FileSystem.writeAsStringAsync(fileUri, base64Data, {
            encoding: FileSystem.EncodingType.Base64,
        });

        // Ensure the file exists
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (!fileInfo.exists) {
            throw new Error('File was not created successfully.');
        }

        // Save to Media Library (Downloads folder)
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        await MediaLibrary.createAlbumAsync('Download', asset, false);

        Alert.alert('Download Successful', 'Excel file saved to Downloads folder!');
    } catch (error) {
        console.error('Export error:', error);
        Alert.alert('Error', 'Failed to save Excel file.');
    }
};

const ExportButton = () => {
    const expe
    return (
        <View style={{ margin: 20 }}>
            <Button title="Export to Excel" onPress={() => exportToExcel(expenses)} />
        </View>
    );
};

export default ExportButton;
