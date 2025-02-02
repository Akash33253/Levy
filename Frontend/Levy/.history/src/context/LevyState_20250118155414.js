import { useState } from "react";
import LevyContext from "./LevyContext";




const LevyState = (props) => {
    const [user, setUser] = useState({});

    return (
        <LevyContext.Provider value={{

        }}>
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;