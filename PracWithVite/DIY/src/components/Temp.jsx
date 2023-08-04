import { useState } from "react"
import "./temp.css"


const Temp = ()=>{
    const [count, setCount] =useState(36)
    const [tempcolor, setTempcolor]= useState('cold')

        function increase(){
            return setCount(count+1)
        }

        function decrease(){
            if(count>1){
                setCount(count-1)
            }       
        }

        function changeColor(){
            if(count <18){
                setTempcolor('cold')
            }
            else{
                setTempcolor('hot')
            }
               
        }

    return(
    
        <div className="container">
            <div className="app hot">
                <div className="displayTemp">{count}</div>
                <div className="flex">
                    <div className="circle ">
                        <button onClick={increase}>+</button>
                    </div>
                    <div className="circle">
                        <button onClick={decrease}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Temp