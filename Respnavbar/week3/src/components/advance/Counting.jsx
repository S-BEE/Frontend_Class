import { useReducer } from "react";
import { countReducer, INIT_STATE } from "./countReducer";

const Counting = ()=>{
    const [state, dispatch] =useReducer(countReducer, INIT_STATE)
    return(
        <div style={{height:'', display:'flex',flexDirection:'column',
        justifyContent:'center', alignItems:'center', gap:'3rem'}}>
            <h1 style={{color:'red'}}>NURSERY COUNTING</h1>
            <div style={{backgroundColor:'blue', color:'#fff', fontSize:32, padding:'5px 15px', borderRadius:'50%'}}>{state.count}</div>
            <div style={{ display:'flex', justifyContent:'center',  gap:'3rem'}}>
                <button className="btn" onClick={()=> dispatch({type:'INCREASE'})}>Add</button>
                <button className="btn" onClick={()=> dispatch({type:'DECREASE'})}>Minus</button>
                <button className="btn" onClick={()=> dispatch({type:'RESET'})}>Reset</button>
                <button className="btn" onClick={()=> dispatch({type:'ADD_BY_ANY_AMOUNT', payload:5})}>Add by 5</button>
            </div>
        </div>

    )
}
export default Counting

