import { useState } from "react";
const  BankDetails = ({setPageTab})=>{
    const[values,setValues]=useState({
        bankname:'',
        accountnumber:''
    }); 
    const handleChanges = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
     }
    return(
      <div className="container">
        <h1>Bank Details :</h1>
        <form >
            <label>Bank Name :</label>
            <input type="text" placeholder="Enter Bank Name" name="bankname"
             onChange={(e)=>handleChanges(e)} required value={values.bankname}/><br />
            <label>Account Number :</label>
            <input type="text" placeholder="Enter Account Number" name="accountnumber"
             onChange={(e)=>handleChanges(e)} required value={values.accountnumber}/><br />
            <button onClick={()=>setPageTab("emergency-contact")}>Previous</button>
             <button type="submit" onClick={()=>setPageTab("health-info")}>Next</button>

        </form>
      </div>
    );
}
export default BankDetails;