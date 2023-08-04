import React, { useEffect } from "react";
import { useState } from "react";

const Nav = ()=>{
    const [dname, setDName]=useState('')

    useEffect(()=>{
        const name = localStorage.getItem('name')
        setDName(name)
    },[])
    const initials = dname.split(' ').map((item)=>{
        return item.charAt(0)
        }).join('').toUpperCase()
    
    return(
        
        <nav style={{width:'max-width'}}>
            <ul >
                <li style={{display:"flex", justifyContent:'center', gap:'2rem'}}>Home</li>
                <li style={{listStyleType:'none'}}>About</li>
                <li>Contact</li>
            </ul>
            <div style={{background:'white', borderRadius:'50%', padding:'5px'}}>{initials}</div>
        </nav>
    )
}


export default Nav