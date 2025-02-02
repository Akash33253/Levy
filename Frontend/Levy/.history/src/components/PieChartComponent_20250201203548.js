import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

// Sample data from the previous API response (you can replace this with actual data from the API)
const categoryExpenses = [
    { category: 'Food', totalAmount: 2500 },
    { category: 'Transport', totalAmount: 1200 },
    { category: 'Investment', totalAmount: 3000 },
    { category: 'Miscellaneous', totalAmount: 500 }
];

const screenWidth = Dimensions.get('window').width;

const PieChartComponent = () => {
    // Prepare data for the PieChart component
    const pieData = categoryExpenses.map(expense => ({
        name: expense.category,
        population: expense.totalAmount,
        color: getCategoryColor(expense.category), // Assign color based on category
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    }));

    // Function to get category colors (you can customize it)
    const getCategoryColor = (category) => {
        const categoryColors = {
            'Food': '#FF6384',
            'Transport': '#36A2EB',
            'Investment': '#FFCE56',
            'Miscellaneous': '#4BC0C0',
            'Rent': '#FF5733',
            'Bill': '#FFC300',
            'Shopping': '#DAF7A6',
            'Personal': '#900C3F'
        };
        return categoryColors[category] || '#7F7F7F'; // Default color if not found
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Monthly Expenses Breakdown</Text>
            <PieChart
                data={pieData}
                width={screenWidth - 40}  // Width of the pie chart
                height={220}  // Height of the pie chart
                chartConfig={{
                    backgroundColor: '#1E2923',
                    backgroundGradientFrom: '#08130D',
                    backgroundGradientTo: '#1E2923',
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    strokeWidth: 2,
                    barPercentage: 0.5,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                center={[10, 50]}
                absolute
            />
        </View>
    );
};

export default PieChartComponent;
