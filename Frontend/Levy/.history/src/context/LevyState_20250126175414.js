import { useState } from "react";
import LevyContext from './LevyContext'
const LevyState = (props) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const ipTemp = '192.168.1.17';
    const [recentExpenses,setRecentExpenses] = useState([])
    return (
        <LevyContext.Provider value={{
            isLoading,
            ipTemp,
            user,
            recentExpenses
            setIsLoading,
            setUser
        }}>
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;