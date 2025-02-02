import LevyContext from "./LEvyContext";

const LevyState = (props)=>{
    return (
        <LevyContext.Provider value={}>
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;