import { useReducer, useState } from "react";
import { todoReducer, TODO_STATE } from "./todoReducer";



const Form = ()=>{
    const [data,setData] = useState('')
    const [state,dispatch]= useReducer(todoReducer,TODO_STATE)



    function handleData(e){
        setData(e.target.value)
        dispatch({type:'COLLECTDATA', payload:{name:e.target.name, value:e.target.value}})
        
    }
    function ADDTOLIST(e){
        e.preventDefault()
        dispatch({type:'ADDTASK', payload:{id:state.length + 1 ,name:data, completed:false}})
        setData('')
    }
    return(
        <div>
            <h1>MY TODO LIST</h1>
            <form onSubmit={ADDTOLIST}>
                <input type="text" name="task"  value={data} onChange={handleData} />
                <button type="submit" onClick={ADDTOLIST} >Enter</button>
            </form>

        </div>
    )
}

export default Form