import React,{useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { message } from 'antd';
import './signIn.css'
import busnessImg from '../image/image.jpg'
import AuthContext from "../context/authContext/authContext";

export default function Signin(props) {
const {loginAuth,auth,error,serverMessage,success} = useContext(AuthContext);


useEffect(()=>{
// error message
if(error && serverMessage){
	//show error message
	message.error(serverMessage)

}
// success login 
if(success && serverMessage){
   // show success message
   message.success(serverMessage);
}
})

// when success login then redirect dashboard page
useEffect(()=>{
	if(auth){
	props.history.push('/dashboard')
  }
	},[auth,props.history])


 
const [formData,setFormData]=useState({
          email:"",
          password:"",
       
      });
const {email,password}=formData

const onSubmit=e=>{
		e.preventDefault();
		loginAuth({email, password});
    }

const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value}); }
  return (
    <div className="loginpage  text-white">
    <div className="signupform">
	<div className="container">
		<div className="agile_info">
			<div className="w3l_form">
				<div className="left_grid_info">
					<h1>Manage Your Business</h1>
					<p>ERP is an acronym that stands for enterprise resource planning (ERP). It's a business process management software that manages and integrates a company's financials, stock management, customer managment, invoice, billing, reporting, manufacturing, and human resource activities.</p>
					<img src={busnessImg} alt="" />
				</div>
			</div>
			<div className="w3_info">
				<h2>Login to your Account</h2>
				<p>Enter your details to login.</p>
				<form onSubmit={e=>onSubmit(e)}>
					<label>Email Address</label>
					<div className="input-group">
						<span className="fa fa-envelope" aria-hidden="true"></span>
						<input type="email"
						 placeholder="Enter Your Email"
						  required
						  name="email"
						  value={email}
						  onChange={e=> onChange(e)}
						  /> 
					</div>
					<label>Password</label>
					<div className="input-group">
						<span className="fa fa-lock" aria-hidden="true"></span>
						<input type="Password" 
						 placeholder="Enter Password"
						 required
						 name="password"
						 value={password}
						 onChange={e=> onChange(e)}
						 
						 />
					</div> 
					<div className="login-check m-2">
					<input className="form-check-input " type="checkbox" id="inlineCheckbox1" value="option1"/>
					</div>						
						<button className="btn btn-info btn-block mb-2" type="submit">Login</button >                
				</form>
				<div>
				<Link to="/forget-password">Forget Password</Link>
				</div>
				
				<p className="account text-white">By clicking login, you agree to our <Link to="/Terms&Conditions" href="">Terms & Conditions!</Link></p>
			
			</div>
		</div>

	</div>

	<div className="footer">
		<p>&copy; 2020 ERP solution. All Rights Reserved | Develop by <u> <a href="https://shohedul350.netlify.app/" target="blank">Shohedul</a></u></p>
	</div>
</div>
</div>

  )}
