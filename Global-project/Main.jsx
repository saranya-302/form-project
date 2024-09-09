import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import AddressInfo from "./AddressInfo";
import EmploymentDetails from "./EmploymentDetails";
import EmergencyContact from "./EmergencyContact";
import BankDetails  from "./BankDetails";
import HealthInformation from "./HealthInformation";
import Submit from "./Submit";
import SignIn from "./SignIn";
import ToDoList from "./ToDoList";
const Main = ()=>{
    const[pageTab,setPageTab]=useState("sign-in");
    const[userDetails,setUserDetails]=useState({
        userId : undefined,
        username : undefined
    });
    switch(pageTab){
        case "personal-info":
            return<PersonalInfo setPageTab={setPageTab} setUserDetails={setUserDetails}></PersonalInfo>
        case "contact-info":
            return<ContactInfo setPageTab={setPageTab} setUserDetails={setUserDetails}></ContactInfo>
        case "address-info":
            return<AddressInfo setPageTab={setPageTab} setUserDetails={setUserDetails}></AddressInfo>
        case "employment-details":
            return<EmploymentDetails setPageTab={setPageTab} setUserDetails={setUserDetails}></EmploymentDetails>
        case "emergency-contact":
            return<EmergencyContact setPageTab={setPageTab} setUserDetails={setUserDetails}></EmergencyContact>
        case "bank-details":
            return<BankDetails setPageTab={setPageTab} setUserDetails={setUserDetails}></BankDetails>
        case "health-info":
            return<HealthInformation setPageTab={setPageTab} setUserDetails={setUserDetails}></HealthInformation>
        case "submit":
            return<Submit setPageTab={setPageTab} setUserDetails={setUserDetails}></Submit>
        case "todo-list":
                return<ToDoList setPageTab={setPageTab} userDetails={userDetails}></ToDoList>
        default :
            return<SignIn setPageTab={setPageTab}></SignIn>
            }

   
}
export default Main;