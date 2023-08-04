import { useEffect, useRef } from "react"
import { useState } from "react"

const SignUp = ()=>{
  const [count, setCount]   = useState()
 const [name, setName]   = useState(localStorage.getItem('name')||"")
 function getName (e){
    setName(e.target.value)
 }
// useEffect(()=>{
//     console.log("Hello")
// })
// useEffect(()=>{  console.log("Say Hi")},[])
// useEffect(()=>{  console.log("mama")}, [name])

    useEffect(()=>{
        const storeName = localStorage.setItem('name',name)
    },[name])


    return(
        <div>
            SIGNUP
            <form>
                <label htmlFor="name">NAME:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>

                <label htmlFor="password">PASSWORD:</label>
                <input type="password" />

                
                <input type="Submit"/>
            </form>

        </div>
    )
}
export default SignUp