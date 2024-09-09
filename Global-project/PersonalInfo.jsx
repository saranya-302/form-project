import { useState } from "react";
import React from "react";

const PersonalInfo = ({setPageTab})=>{
    const[values,setValues]=useState({
    firstname:'',
    lastname:'',
    dob:'',
    gender:''
    });
    const handleChanges = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
    }
    return(
       <div className="container">
        <h1>Personal Information</h1>
        <form>
            <label>First Name :</label>
            <input type="text" placeholder="Enter First Name" name="firstname" 
             onChange={(e)=>handleChanges(e)} required value={values.firstname}/><br />
            <label>Last Name :</label>
            <input type="text" placeholder="Enter Last Name" name="lastname" 
             onChange={(e)=>handleChanges(e)} required value={values.lastname}/><br />
            <label>Date of Birth :</label>
            <input type="number" placeholder="Enter DOB" name="dob" 
             onChange={(e)=>handleChanges(e)} required value={values.dob}/><br />
            <label >Gender :</label>
            <input type="radio" name="gender"
             onChange={(e)=>handleChanges(e)} required value={values.gender}/>Male
            <input type="radio" name="gender"
             onChange={(e)=>handleChanges(e)} required value={values.gender}/>Female
            <input type="radio" name="gender"
             onChange={(e)=>handleChanges(e)} required value={values.gender}/>Other
            <br />
            <button onClick={()=>setPageTab("sign-in")}>Previous</button> 
            <button type="submit" onClick={()=>setPageTab("contact-info")}>Next</button>
        </form>
       </div>
    );
}
export default PersonalInfo;