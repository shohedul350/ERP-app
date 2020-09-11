import React,{useContext} from 'react'
import  AuthContext from '../context/authContext/authContext'
import {Route,Redirect} from 'react-router-dom'

const AdminAccessRoute =({component: Component, ...rest})=>{
    const {adminAuth}=useContext(AuthContext)
    return(
   <Route
   {...rest}
   render={props=> !adminAuth ?  (<Redirect to='/dashboard/permission'/>) : (<Component {...props} />)  }
   
   />
    )
    
}

export default AdminAccessRoute