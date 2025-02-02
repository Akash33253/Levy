import { useState } from "react";
import LevyContext from "./LEvyContext";

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
                    "name": "blogs",
                    "event_type": "News",
                    "sort": "desc",
                    "name": "",
                    "page_size": "5",
                    "page": "0",
                    "featured": true,
                    "token": storedToken
                })
            })
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