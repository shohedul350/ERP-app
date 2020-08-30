
import React,{useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { message } from 'antd';
import { Input } from 'antd';
import AuthContext from "../context/authContext/authContext";

export default function ForgotPassword(props) {
  const {resetRequest,error,serverMessage,success} = useContext(AuthContext);
  const token = props.match.params.token

  useEffect(()=>{
  // error message
  if(error && serverMessage){
    //show error message
    message.error(serverMessage)
  
  }
  // success send
  if(success && serverMessage){
     // show success message
     message.success(serverMessage);
  }
  })

  

const [password,setPasword]=useState('');
const [confirmPassword,setConfirmPassword]=useState('');
const onSubmit=e=>{
  e.preventDefault();
  if (password !== confirmPassword)  {
    return  message.error("password don't match")
  
   }
   resetRequest({password},token)
  }



  return (
         <div className="container bg-white">
        <div className="isoFormContentWrapper">
          <div className="card">
            <div className="p-5">
              <Link to="/">
                Back
              </Link>
            </div>

    
            <form onSubmit={e=>onSubmit(e)}>
            <div className="isoForgotPassForm">
              <div className="isoInputWrapper">
                <input size="large" 
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={event => setPasword(event.target.value)}
                required
                 />
              </div>
              <div className="isoInputWrapper">
                <Input size="large" 
                type="password"
                placeholder="Enter Your Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
                required
                 />
              </div>

              <div className="isoInputWrapper">
              <button className="btn btn-info btn-block mb-2" type="submit">Reset Password</button >
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
  )
}


