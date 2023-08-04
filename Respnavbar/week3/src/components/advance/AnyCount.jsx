import { useReducer } from "react";
import { countReducer, INIT_STATE } from "./countReducer";

const AnyCount = ()=>{
    const [state, dispatch] =useReducer(countReducer, INIT_STATE)

    return(
        <div>
            
            <h1>{state.count}</h1> 
        </div>
    )
}
export default AnyCount