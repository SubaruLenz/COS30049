
import React,{ useState } from 'react';
export const Login = (props) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit =(e) =>{
        e.preventDefaullt();
        console.log(username );
    }
    return (
        <div classname="auth-form-container">
        <form onSubmit ={handleSubmit}> {/*submit name to login */}
            <label htmlFor="username">Username</label> 
            <input type="text" placeholder='User Name' id="username" name="username" /> {/*type username */}
            <label htmlFor="password" >Password</label>
            <input type="password" placeholder="*******" id="password" name="password"/> {/*type password */}
            <button type="submit">Log in</button>
        </form>
        <button onClick={() => props.onFromSwitch('register')}>If you do not have account, Register here</button> {/* switch to register form  */}
        </div>
    )
}