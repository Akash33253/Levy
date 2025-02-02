import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../../components/Footer'
import { ScrollView } from 'react-native-gesture-handler'

export default function Transaction({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const showPicker = useCallback((value) => setShow(value), []);

    const onValueChange = useCallback(
        (event, newDate) => {
            const selectedDate = newDate || date;

            showPicker(false);
            setDate(selectedDate);
        },
        [date, showPicker],
    );
    return (
        <SafeAreaView className="flex-1 bg-light-100">
            <View className="flex-1">
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        paddingVertical: 10
                    }}
                >
                    

                </ScrollView>
            </View>
            <Footer navigation={navigation} color={"#FFFFFF"} />
        </SafeAreaView>
    )
}
