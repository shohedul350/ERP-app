
import React,{useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { message ,Input,Layout} from 'antd';

import AuthContext from "../context/authContext/authContext";

export default function ForgotPassword(props) {
  const {forgetRequest,error,serverMessage,success} = useContext(AuthContext);
const {Content}=Layout

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

  

const [email,setEmail]=useState('');
const onSubmit=e=>{
  e.preventDefault();
 forgetRequest({email});
 setEmail("")
  }


  return (

    <div class="container" >
	<div class="" style={{marginTop:"50px"}}>
  <div className="col-md-6 offset-md-3">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
    
                <form onSubmit={e=>onSubmit(e)}>
            <div className="isoForgotPassForm">
              <div className="isoInputWrapper">
               <Input size="large" 
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
                 />
              </div>

              <div className="pt-4">
              <button className="btn btn-info btn-block mb-2" type="submit">Send Request</button >
              </div>
            </div>
            </form>
    
                  </div>
         <div className="">
             <Link to="/">
                Back
              </Link>
            </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>



      //    <div className="container">
      //   <div className="isoFormContentWrapper">
      //     <div className="isoFormContent">
      //       <div className="isoLogoWrapper">
      //         <Link to="/">
      //           Back
      //         </Link>
      //       </div>

    
      //       <form onSubmit={e=>onSubmit(e)}>
      //       <div className="isoForgotPassForm">
      //         <div className="isoInputWrapper">
      //           <Input size="large" 
      //           placeholder="Enter Your Email"
      //           name="email"
      //           value={email}
      //           onChange={event => setEmail(event.target.value)}
      //           required
      //            />
      //         </div>

      //         <div className="isoInputWrapper">
      //         <button className="btn btn-info btn-block mb-2" type="submit">Send Request</button >
      //         </div>
      //       </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
  
  )
}


