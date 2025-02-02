import { useState } from "react";
import LevyContext from "./LEvyContext";

const LevyState = (props)=>{
    const [user,seyUser] = useState();
    
    return (
        <LevyContext.Provider value={{

        }}>
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;