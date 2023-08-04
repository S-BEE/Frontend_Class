import { Outlet } from "react-router-dom";
import Navbar from "./NAVBAR/Navbar";

const Layout = ()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>

    )
}
export default Layout