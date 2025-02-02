import LevyContext from "./LEvyContext";

const LevyState = (props)=>{
    return (
        <LevyContext.Provider >
            {props.children}
        </LevyContext.Provider>
    )
}


export default LevyState;