import { useState } from "react";
import React from "react";
import axios from 'axios';
const Submit = ({setPageTab})=>{

        const[values,setValues]=useState({
            review:''
        });
        const handleChanges = (e) => {
            setValues({...values,[e.target.name]:[e.target.value]})
         }
         const handleSubmit = (e) =>{
                 e.preventDefault() // Prevent the default form submission behavior
                 axios.post('url',values)
                 console.log(values);
                }
    
   return(
     <div className="container">
        <h1>Review & Submit</h1>
        <form onSubmit={handleSubmit}>
            <label>Review :</label>
            <textarea name="review"  id="Review" cols="80" rows="8" placeholder="Enter Review" 
             onChange={(e)=>handleChanges(e)} required value={values.review}></textarea><br />
            <button type="submit" onClick={()=>setPageTab("")}>Submit</button>
        </form>
     </div>
   );
}
export default Submit;
