import React from 'react'
import './sign.css'
import Button from 'react-bootstrap/Button'


function SignUp(){
    return (
        <>
            <div class="top-section">
                    <h3 class="logo">Made Goods</h3>
                    <div class="navbar">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Furniture</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#" class="btn-ish">Login</a></li>
                        <li><a href="#"></a>or SignUp</li>  
                    </div>       
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row"></div>
                </div>
            </div>
        </>
    )
}

export default SignUp
