import React from "react";
import { useState } from "react";
const AddressInfo = ({setPageTab})=>{
    const[values,setValues]=useState({
        addressline1:'',
        addressline2:''
    });
    const handleChanges = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
     }
    return(
       <div className="container">
        <h1>Address Information</h1>
         <form >
            <label>Address Line 1 : </label>
            <input type="text" placeholder="Enter Address Line 1"  name="addressline1"
            onChange={(e)=>handleChanges(e)} required/><br />
            <label>Address Line 2 : </label>
            <input type="text" placeholder="Enter Address Line 2"  name="addressline2"
            onChange={(e)=>handleChanges(e)} required/><br />
            <button onClick={()=>setPageTab("contact-info")}>Previous</button>
             <button onClick={()=>setPageTab("employment-details")}>Next</button>
       </form>
       </div>
    );
}
export default AddressInfo;