import { useState } from "react";
import LevyContext from "./LEvyContext";

const LevyState = (props)=>{
    const [user,setUser] = useState({});


    const signUpUser =async (data)=>{
        try {
            const response = await fetch("localhost:5000/auth/createUser")
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