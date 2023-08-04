import './navbar.css'
import { Menuitems } from './MenuItems'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=>{
    const [isClicked, setIsClicked] = useState(false)

    function toggle(){
        setIsClicked(!isClicked)
        console.log(isClicked)
    }

    return(
        <nav>
            <h4 className='logo'>MyBrand</h4>
            <button className="hamburger" onClick={toggle}>
                <GiHamburgerMenu />
            </button>
            <div className={isClicked? "expanded":"menulist"}>
                <ul>
    
                        {Menuitems.map((item,index)=>{
                            return(
                                <li key={index}><Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link></li>
                            )

                        })}

                </ul>
            </div>
        </nav>
    )
}


export default Navbar