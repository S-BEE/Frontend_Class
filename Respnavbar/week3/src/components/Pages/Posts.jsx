import { useState } from "react";

const Posts = ()=>{

    const [head, setHead] = useState("")
    const [content, setContent] = useState("")

    const info ={
        title:head,
        body:content,
        userId: 1,
    }
    const getHead = (e)=>{
        setHead(e.target.value)
    }
    function getContent (e){
        setContent(e.target.value)

    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            body:JSON.stringify({info}),
            headers:{
                "content-type":"application/json; charset=UTF-8"
            }
        })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((err)=> alert("error message: " ,err));
    }


    return(
    

        <form onSubmit={handleSubmit} >
            <label htmlFor="head">Head:</label>
            <input type="text" name="head"  onChange={getHead}/>
            <br />
            <label htmlFor="content">Content:</label>
            <input type="text" name="content"  onChange={getContent} />
            <br />
            <button type="submit" style={{}}>Submit</button>
        </form>

    )
}

export default Posts