import {axios, useEffect, useState} from "react"


const baseURL='https://jsonplaceholder.typicode.com/posts'


const Axioss = ()=>{
    const [post, setPost] = useState(null)

    useEffect(()=>{
        axios.get(baseURL)
        .then((response)=>{setPost(response.data)})
    },[])

    function createPost (){
        axios.post(baseURL,{
            title: "Hello World!",
            body:"This is a new post."
        })
        .then((response)=>{setPost(response.data)})
    }
    
    return(
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button onClick={createPost}>Create Post</button>
            </div>
    )
}