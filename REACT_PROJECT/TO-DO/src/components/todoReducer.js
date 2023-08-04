export const TODO_STATE =[]
export function todoReducer (state,action){
    if ( action.type === "COLLECTDATA"){
        
        return{
            ...state, task:action.payload}
    }
    if ( action.type === "ADDTASK"){
        return [...state.task,  { id:state.length+1, completed: false}]
    }
    if ( action.type === "DELETE"){
        return
        
    }
    if ( action.type === "DONE"){
        
    }
    else {
        return state
    }}


//  export function todoReducer (state,action){
//      switch(action.type){
//     case INPUTED:
//         return{data:,submit:,completed:,delete:,}
//         break;
//     case INPUTED:
//         return{data:,submit:,completed:,delete:,}
//         break;
//     case INPUTED:
//             return{data:,submit:,completed:,delete:,}
//             break;
//     case INPUTED:
//             return{data:,submit:,completed:,delete:,}
//     break;
//     default: 
//     return state

    
// }
