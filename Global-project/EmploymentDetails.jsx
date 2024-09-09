import { useState } from "react";
const EmploymentDetails = ({setPageTab})=>{
    const[values,setValues]=useState({
        jobtitle:'',
        department:''
    });
    const handleChanges = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
     }
    return(
      <div className="container">
       <h1>Employment Details</h1>
        <form >
            <label>Job Title :</label>
            <input type="text" placeholder="Job Title" name="jobtitle"
             onChange={(e)=>handleChanges(e)} required value={values.jobtitle}/><br />
            <label>Department :</label>
            <input type="text" placeholder="Department" name="department" 
             onChange={(e)=>handleChanges(e)} required value={values.department}/><br />
            <button onClick={()=>setPageTab("address-info")}>Previous</button> 
            <button type="submit" onClick={()=>setPageTab("emergency-contact")}>Next</button>

        </form>
      </div>
    );
}
export default EmploymentDetails;