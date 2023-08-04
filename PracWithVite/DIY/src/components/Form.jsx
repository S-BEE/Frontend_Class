import { useState} from "react";

const[info, updateInfo] = useState({
    username : "",
    password :"",
    checked: false

})

function getUsername(e){
    updateInfo(()=>{ ...info, username: e.target.value})
}

function getPassword(e){
    updateInfo(()=>{...info, password: e.target.value})
}

function isChecked(e){
    updateInfo(()=>{...info, checked: e.target.value})
}

function handleSubmit(e){
    e.preventDefault()

}
const Form = ()=>{
    return(
        <div>
            <div style ={{width: 700, height: 350,background: 'purple',  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: 500, height: 250, background: 'white', display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{width: 250, padding: 20,}}> 
                        <h3>Login</h3>
                        <form  onSubmit={handleSubmit}>
                            <label htmlFor="name">Username</label>
                            <input 
                            type="email" 
                            id="" 
                            name="" 
                            value={info.username}
                            placeholder="Enter your email"
                            onChange={getUsername}
                            />
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            id=" " 
                            name="" 
                            value={info.password}
                            placeholder="Enter your password"
                            onChange={getPassword}
                            />
                            <div>
                                <input 
                                type="checkbox"
                                value={info.checkedb }
                                onClick={isChecked}
                                />
                                <label htmlFor="remember">Remember me</label>
                                <a href="#" style={{textDecoration: 'none', fontSize: 'small',}}>Forgot password?</a>
                            </div>
                    
                    <input style={{width: 200, height: 30, background: 'purple', color: 'white', borderRadius: 5}}
                    type="submit" 
                    name="Login" 
                    onClick={}/>
                </form> 
            </div>
        </div>
    </div>
    
        </div>
    )
}
export default Form