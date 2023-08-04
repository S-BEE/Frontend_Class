import { useReducer, useEffect } from "react";
import {GET_POST,getReducer} from './getReducer.js'




const GetPost = ()=>{
const [state,dispatch] = useReducer(getReducer,GET_POST)



const baseURL = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(()=>{
        const getPosts= ()=>{
        dispatch({type:"START_FETCH"})
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((bshuk)=>{
            dispatch({type:"DATA_FETCH", payload:bshuk});
        })
        .catch((error)=>{
           console.log(error);
           dispatch({type:"START_FETCH"});
        });
    };
    getPosts();
},[])

    return(
        <div style={{maxWidth:700, margin:"auto"}}>
            {state.error && "wat a gwain!"}
            {state.loading? (
                <ClpLoader loading={state.loading} size={150}/>
            ):(
                state.map((post)=>{
                    return(
                        <div className="" key={post.id} style={{marginBottom:20,padding:'5rem,1rem', borderRadius:'0.5rem'}}>
                            {<img/>}
                            <P>{post.body}</P>
                        </div>
                    )
                })
            )}



        </div>
    )
}


export default GetPost