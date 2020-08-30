import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/authContext/authContext'

export default function MyProfile() {
const {getAuth,authLoad} = useContext(AuthContext);
useEffect(()=>{
  getAuth()
},[]);

  
    return (

            <div className="bg-dark text-white p-3">
              <div>
            <div className="float-left"><h3>Profile</h3></div>      
           <div className="float-right"><span className=""><i className="fas fa-user-edit"></i></span></div>
               
           </div>
             <p className="text-white p-5">some info you never change</p>

             <table className="table m-2 table-dark">
             <tbody>
    <tr>
      <td>Name : {authLoad.userName}</td>

    </tr>
    <tr>
     
      <td>Email : {authLoad.email}</td>
     
    </tr>
    <tr>
      
      <td>Possition : {authLoad.role}</td>
     
    </tr>
    <tr>
      
      <td><Link to ="/dashboard/change-password">Change Password</Link></td>
     
    </tr>
   
  </tbody>
  </table>
  </div>
    )
}