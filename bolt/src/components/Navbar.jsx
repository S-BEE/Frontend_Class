import logo from '../assets/logo.svg'
const Navbar = ()=>{

    return(
        <nav className='border flex px-[5%] gap-[15%]'> 
            <img src={logo} alt=""  />
            <ul className='flex  gap-[5%]'>
                <li className='flex-1 p-[0.5rem] text-[1.25rem]'>Products</li>
                <li className='flex-auto p-[0.5rem] text-[1.25rem] ' >Partner with Bolt</li>
                <li className='flex-1 p-[0.5rem] text-[1.25rem]'>Company</li>
                <li className='flex-1 p-[0.5rem] text-[1.25rem]'>Support</li>
                <li className='flex-1 p-[0.5rem] text-[1.25rem]'>Safety</li>
                <li className='flex-1 p-[0.5rem] text-[1.25rem]'>Cities</li>
                
            </ul>
        </nav>

    )
}

export default Navbar