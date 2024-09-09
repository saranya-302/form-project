import { useState } from "react";
const HealthInformation = ({setPageTab})=>{
    const[values,setValues]=useState({
        healthissues:'',
         healthallergies:''
    });
    const handleChanges = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
     }
    return(
       <div className="container">
        <h1>Health Information :</h1>
        <form >
            <label>Health Issues :</label>
            <input type="text" placeholder="Enter health Issues" name="healthissues" 
             onChange={(e)=>handleChanges(e)} required value={values.healthissues}/><br />
            <label>Allergies :</label>
            <input type="text" placeholder="Enter Allergies" name="healthallergies" 
             onChange={(e)=>handleChanges(e)} required value={values.healthallergies}/><br />
            <button onClick={()=>setPageTab("bank-details")}>Previous</button> 
            <button type="submit" onClick={()=>setPageTab("submit")}>Next</button>

        </form>
       </div>
    );
}
export default HealthInformation;