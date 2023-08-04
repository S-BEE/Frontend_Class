import React from "react"
import { Link } from "react-router-dom"
import './nav.css'
import Button from "./Button"
import { useState } from "react"
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = ()=>{
    const [isClicked, setIsClicked] = useState(false)

    function toggle(){
        setIsClicked(!isClicked)
        console.log(isClicked)
    }
    return(
        <nav>
            <h2 className="logo">Course<span>space</span></h2>
            <button className="hamburger" onClick={toggle}>
                <GiHamburgerMenu />
            </button>
            <div className={isClicked? "expanded":"menulist"} >
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Mentor</a></li>
                </ul>
            </div>
            {/* <div className="cta">
                <Button
                text ="Sign In"  />
                <Button 
                text ="Sign Up"
                txtcol='#fff'
                bg='#127c71' 
                /> 
                </div>*/}
            
            {/* <Link to='Learn'>Sign Out </Link>
            <Link to='courses'>log In </Link> */}
        </nav>
    )
}

export default Navbar