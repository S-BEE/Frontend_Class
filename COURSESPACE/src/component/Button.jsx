import React from "react"
import './button.css'


const Button = ({text,txtcol ="#127c71", bg='#fff'})=>{
    return(
        <button className="btn" style={{color:txtcol,background:bg}}>{text}</button>
    )
}


export default Button