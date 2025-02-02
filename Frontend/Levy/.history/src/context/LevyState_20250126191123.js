import { useState } from "react";
import LevyContext from './LevyContext'
import AsyncStorage from "@react-native-async-storage/async-storage";
const LevyState = (props) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const ipTemp = '192.168.1.17';
    const [recentExpenses, setRecentExpenses] = useState([])
    const categoryColors = {
        Food: "#FFEB99",
        Transport: "#A0D3F1",
        Rent: "#D9E6A0",
        Bill: "#F7C7A3",
        Shopping: "#F8C9FF",
        Investment: "#A4D8A9",
        Personal: "#FBE7D5",
        Miscellaneous: "#FFE0B2",
      };
      
    
    const getRecentExpenses = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`http://${ipTemp}:5000/expense/fetchRecentExpenses`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                })
                const json = await response.json();
                if (json && json.success&&json.recentExpenses) {
                    setRecentExpenses(json.recentExpenses)
                }
            }
            else {
                navigation.replace('onboarding')
            }

        } catch (error) {
            console.log(error);
            alert("Some erroe occured");
        }
    }


    return (
        <LevyContext.Provider value={{
            isLoading,
            ipTemp,
            user,
            recentExpenses,
            categoryColors,
            setIsLoading,
            setUser,
            getRecentExpenses,
        }}>
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;