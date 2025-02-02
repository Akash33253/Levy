import { useState } from "react";
import LevyContext from './LevyContext'
const LevyState = (props) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const ipTemp = '192.168.1.17';
    const [recentExpenses,setRecentExpenses] = useState([])

    const getUser = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if(token){
                const response = await fetch(`http://${ipTemp}:5000/auth/getUser`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token" : token
                    },
                })
                const json = await response.json();
                if (json && json.user) {
                    navigation.replace('home');
                    setUser(json.user);
                }
                else{
                    navigation.replace('onboarding') 
                }
            }
            else{
                navigation.replace('onboarding')
            }

        } catch (error) {
            console.log(error);
            alert("Some erroe occured");
        }
    }
    const getRecentExpenses = async ()=>{
        try {
            
        } catch (error) {
            
        }
    }
    return (
        <LevyContext.Provider value={{
            isLoading,
            ipTemp,
            user,
            recentExpenses,
            setIsLoading,
            setUser
        }}>
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;