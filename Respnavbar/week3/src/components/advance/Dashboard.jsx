import Sidebar from "./Sidebar"
import Main from "./Main"

const Dashboard = ({username})=>{
    return(
            <div style={{display:'grid',gridTemplateColumns:'1fr 5fr', height:'100vh' }}>
            <Sidebar username={username} />
            <Main  username={username}/>
            
            
            </div>
    )
}


export default Dashboard