import { useState } from "react";
const SignIn = ({setPageTab})=>{
    const[values,setValues]=useState({
        username:'',
        pasword:''
    });
    const handleChanges = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
    }
 return(
        <div className="container">
        <h1>Sign In</h1>
        <form >
          <label>User Name :</label>
          <input type="text" placeholder='Enter User Name' name='username' 
          onChange={(e)=>handleChanges(e)} required/><br />
          <label>Password :</label>
          <input type="number" placeholder='Enter Password' name="password" 
          onChange={(e)=>handleChanges(e)} required/><br />
          <button type="submit" onClick={()=>setPageTab("personal-info")}>Sign In</button>
        </form>
      </div>
    );
}
export default SignIn;