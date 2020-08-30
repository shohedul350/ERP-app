import React,{useState,useContext,useEffect} from 'react'
import { message } from 'antd';
import AuthContext from "../../context/authContext/authContext";
import {Link} from 'react-router-dom'

export default function ChangePassword() {
  const {changePassword,success,error,serverMessage,} = useContext(AuthContext);



  useEffect(()=>{
    // error message
if(error && serverMessage){
  //show error message

  message.error(serverMessage)

}
// success aded 
if(success && serverMessage){
 // show success message
 message.success(serverMessage);
}


  })


 
  const [formData,setFormData]=useState({
    oldPassword:"",
    newPassword:"",
    confirmNewPassword:""
 });
const {oldPassword,newPassword,confirmNewPassword}=formData

const onSubmit=e=>{
  e.preventDefault();
  if (newPassword !== confirmNewPassword)  {
  return  message.error("new password don't match")

 }
  changePassword({ oldPassword,newPassword });

  }

  
const onChange=e=>{
  setFormData({...formData,[e.target.name]:e.target.value})
  }
    return (
        <div className="p-4 text-white">
            <div className=" p-5">
            <section className="mb-5">

<p className="m-4 text-white">Set a new password</p>

<form onSubmit={e=>onSubmit(e)}>

<div className="form-group">
  <label >Old password</label>
    <input type="password" 
    className="form-control m-3 shadow bg-white"
    name="oldPassword"
    placeholder="Enter Here"
    value={oldPassword}
    onChange={e=> onChange(e)}
    required
    />
    
  </div>
  

  <div className="form-group">
  <label >New password</label>
    <input type="password"  
    className="form-control m-3 shadow bg-white"
    name="newPassword"
    placeholder="Enter Here"
    value={newPassword}
    onChange={e=> onChange(e)}
    required
    
    />
    
  </div>

  <div className="form-group ">
  <label>Confirm password</label>
    <input type="password" 
    className="form-control m-3 shadow bg-white"
    placeholder="Enter Here"
    name="confirmNewPassword"
    value={confirmNewPassword}
    onChange={e=> onChange(e)}
    required
    />
    
  </div>

  <button type="submit" className="btn btn-primary m-4">Change password</button>

</form>


<div className="d-flex justify-content-between align-items-center mb-2">

  <u><Link to="/dashboard">Back </Link></u>


</div>

</section>
</div>     
    </div>
    )
}
