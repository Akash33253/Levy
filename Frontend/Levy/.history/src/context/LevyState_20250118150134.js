import { useState } from "react";
import LevyContext from "./LEvyContext";

const LevyState = (props)=>{
    const [user,setUser] = useState({});


    const signUpUser =async (data)=>{
        try {
            
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