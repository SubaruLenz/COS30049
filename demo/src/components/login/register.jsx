import React,{useState} from 'react';
export const Register =(props) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const handleSubmit =(e) =>{
        e.preventDefaullt();
        console.log(username );
    }

   return (
    <div className="auth-form-contatiner">
    <form onSubmit ={handleSubmit}> {/* submit register  */}
            <label>Full name</label>
            <input value={name} name="name" id="name" placeholder='Full name'/> {/*type full name */}
            <label htmlFor="username">Username</label> 
            <input type="text" placeholder='User name' id="username" name="username" /> {/*type username  */}
            <label htmlFor="password" >Password</label>
            <input type="password" placeholder="*******" id="password" name="password"/> {/*type password  */}
            <button type="submit">Log in</button>
        </form>
        <button  onClick={() => props.onFromSwitch('Log in')}>Log in here </button> {/*switch to login form */}
        </div>
   ) 
}