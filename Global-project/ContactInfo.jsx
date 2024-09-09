import { useState } from "react";
const ContactInfo = ({setPageTab})=>{
    const[values,setValues]=useState({
        email:'',
        phonenumber:'',
    });
    const handleChanges = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
     }
    return(
        <div className="container">
            <h1>Contact Information</h1>
            <form >
                <label>Email :</label>
                <input type="text" placeholder="Enter Email" name="email" 
                 onChange={(e)=>handleChanges(e)} required value={values.email}/> <br />
                <label>Phone Number :</label>
                <input type="text"  placeholder="Enter Phone Number" name="phonenumber"
                 onChange={(e)=>handleChanges(e)} required value={values.phonenumber}/><br />
                <button onClick={()=>setPageTab("personal-info")}>Previous</button>
                 <button type="submit" onClick={()=>setPageTab("employment-details")}>Next</button>
            </form>
        </div>
    );
}
export default ContactInfo;