import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { View, Button, Alert } from 'react-native';
import XLSX from 'exceljs';
import { Buffer } from 'buffer';

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

        // Write workbook to a buffer
        const buffer = await workbook.xlsx.writeBuffer();
        const fileName = `Expenses_${Date.now()}.xlsx`;
        const fileUri = `${FileSystem.documentDirectory}${fileName}`;

        // Save the file as base64
        await FileSystem.writeAsStringAsync(fileUri, Buffer.from(buffer).toString('base64'), {
            encoding: FileSystem.EncodingType.Base64,
        });

        // Move the file to Downloads folder
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        await MediaLibrary.createAlbumAsync('Download', asset, false);

        Alert.alert('Download Successful', 'Excel file saved to Downloads folder!');
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
