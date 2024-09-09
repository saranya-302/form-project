import { useState } from "react";
const EmergencyContact =({setPageTab})=>{
    const[values,setValues]=useState({
    emergencycontactname:'',
    emergencycontactphone:''
    });
    const handleChanges = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
     }
    return(
        <div className="container">
            <h1>Emergency Contact</h1>
        <form >
            <label>Emergency Contact Name :</label>
            <input type="text" placeholder="Enter Emergency Contact Name" name="emergencycontactname" 
             onChange={(e)=>handleChanges(e)} required value={values.emergencycontactname}/><br />
            <label>Emergency Contact Phone :</label>
            <input type="text" placeholder="Enter Emergency Contact Phone" name="emergencycontactphone" 
             onChange={(e)=>handleChanges(e)} required value={values.emergencycontactphone}/><br />
            <button onClick={()=>setPageTab("employment-details")}>Previous</button> 
            <button type="submit" onClick={()=>setPageTab("bank-details")}>Next</button>

            </form>    
        </div>

    );
}
export default EmergencyContact;