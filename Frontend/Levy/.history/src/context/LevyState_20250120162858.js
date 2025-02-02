import { useState } from "react";
import LevyContext from './LevyContext'
const LevyState = (props) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const ipTemp = '192.168.1.26';
    return (
        <LevyContext.Provider value={{
            isLoading,
            setIsLoading
        }}>
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;