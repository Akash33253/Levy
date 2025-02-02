import LevyContext from "./LEvyContext";

const LevyState = (props)=>{
    return (
        <LevyContext.Provider>
            {props.ch}
        </LevyContext.Provider>
    )
}


export default LevyState;