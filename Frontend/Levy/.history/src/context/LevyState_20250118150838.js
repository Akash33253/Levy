import { useState } from "react";
import LevyContext from "./LEvyContext";
import {AsyncStorage} from 'react-native';

const LevyState = (props) => {
    const [user, setUser] = useState({});


    const signUpUser = async (data) => {
        try {
            const response = await fetch("localhost:5000/auth/createUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name": data.full_name,
                    "email": data.email,
                    "password": data.password,
                })
            })
            const json = await response.json();
            if(json&&json.success){
                const token =  json.authToken;
                await AsyncStorage.setItem("token",to)
            }
        } catch (error) {

        }
    }
    return (
        <LevyContext.Provider value={{

        }}>
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;