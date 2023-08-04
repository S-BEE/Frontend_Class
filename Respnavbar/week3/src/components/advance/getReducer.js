export const GET_POST = {
    load : false,
    post : [],
    error : false
}


export function getReducer(state, action)
switch (action.type){
    case START_FETCH:
        return { load:true, post:[], error:false }
    break;
    case DATA_FETCH:
        return { load:false, post:action.payload, error:false }
    break;
    case FETCH_ERROR:
        return { load:false, post:[], error:true }
    break;
    default:
         return state
}