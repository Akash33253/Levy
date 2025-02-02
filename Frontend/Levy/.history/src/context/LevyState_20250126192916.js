import { useState } from "react";
import LevyContext from './LevyContext'
import AsyncStorage from "@react-native-async-storage/async-storage";
const LevyState = (props) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const ipTemp = '192.168.1.17';
    const [recentExpenses, setRecentExpenses] = useState([])
    const categoryData = {
        Food: {
          color: "#c4e6ff",
          image: require('../../assets/images/foodIcon.png') 
        },
        Transport: {
          color: "#fff7d6",
          image: require('../../assets/images/transportIcon.png') 
        },
        Rent: {
          color: "#a4f19c",
          image: require('../../assets/images/rentIcon.png') 
        },
        Bill: {
          color: "#F7C7A3",
          image: require('../../assets/images/billIcon.png') 
        },
        Shopping: {
          color: "#F8C9FF",
          image: require('../../assets/images/shoppingIcon.png') 
        },
        Investment: {
          color: "#A4D8A9",
          image: require('../../assets/images/investmentIcon.png') 
        },
        Personal: {
          color: "#FBE7D5",
          image: require('../../assets/images/personalIcon.png') 
        },
        Miscellaneous: {
          color: "#FFE0B2",
          image: require('../../assets/images/miscellaneousIcon.png') 
        }
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
            categoryData,
            setIsLoading,
            setUser,
            getRecentExpenses
        }}>
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;