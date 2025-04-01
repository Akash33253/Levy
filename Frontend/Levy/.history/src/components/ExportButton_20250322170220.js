import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { View, Button, Alert } from 'react-native';
import XLSX from 'exceljs';
import { encode as base64Encode } from 'js-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import LevyContext from '../context/LevyContext';

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

        // Convert workbook to Base64 string
        const fileBuffer = await workbook.xlsx.writeBuffer();
        const base64String = base64Encode(fileBuffer); // Convert binary to Base64

        // Define file path
        const fileName = `Expenses_${Date.now()}.xlsx`;
        const fileUri = `${FileSystem.documentDirectory}${fileName}`;

        // Write Base64 encoded Excel file
        await FileSystem.writeAsStringAsync(fileUri, base64String, {
            encoding: FileSystem.EncodingType.Base64,
        });

        // Check if file was successfully saved
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (!fileInfo.exists) {
            throw new Error('File was not created successfully.');
        }

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
    const context = useContext(LevyContext)
    const {ip}= context;
    const getAllExpenses = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/expense/fetchAllExpenses`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success && json.expenses) {
                    exportToExcel(json.expenses)
                }
            }
        } catch (error) {
            console.log(error);
            alert("Some erroe occured");
        }
    }
    
    return (
        <View style={{ margin: 20 }}>
            <Button title="Export to Excel" onPress={() => getAllExpenses()} />
        </View>
    );
};

export default ExportButton;
