import React from 'react'
import './navbar.css'

function Navbar(){
    return(
        <div className="nav-container">
            <a href="#">Khabar</a>
            <nav className="nav-menu">
                <ul>
                    <li>Home</li>
                    <li>Food</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}


export default Navbar