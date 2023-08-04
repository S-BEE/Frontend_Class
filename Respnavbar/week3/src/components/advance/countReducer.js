export const INIT_STATE = {
    count:0
}
 export function countReducer(state, action){
    if (action.type === "INCREASE"){
        return {count:state.count+1}
    }
    if (action.type === "DECREASE"){
        return {count:state.count-1}
    }
    if (action.type === "RESET"){
        return {count:0}
    }
    if (action.type === 'ADD_BY_ANY_AMOUNT'){
        return {count: state.count + action.payload}
    }
    else{
        return state
    }

 }