import { useReducer } from "react";
import { todoReducer, TODO_STATE } from "./todoReducer";


const TodoList= ()=>{
    const [state,dispatch]= useReducer(todoReducer,TODO_STATE)

    return(
        <div>
            <ul>
                {state.todos.map((item)=>{
                    return(
                        <div className="">
                           <li key={item.id}>{item.name}</li>
                        <button>Done</button>
                        <button>Edit</button>
                        <button>Clear</button>
                        </div>
                        
 
                        )
                })}

            </ul>
        </div>
    )
}
export default TodoList