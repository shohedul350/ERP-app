import React,{useContext} from 'react'
import  AuthContext from '../context/authContext/authContext'
import {Route,Redirect} from 'react-router-dom'

const AdminAccessRoute =({component: Component, ...rest})=>{
    const {adminAuth}=useContext(AuthContext)
    return(
   <Route
   {...rest}
   render={props=>adminAuth  ?  (<Component {...props} />) : (<Redirect to='/dashboard/permission'/>) }
   
   />
    )
    
}

export default AdminAccessRoute