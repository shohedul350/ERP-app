import React,{useReducer} from 'react'
import axios from 'axios'
import ProfileContext from '../profileContext/ProfileContext'
import ProfileReducer from '../profileContext/ProfileReducer.js'

import {
        
        CLEAR_SUCCESS,
        ERROR,
        CLEAR_ERROR,
        GET_PROFILE,
        ADD_PROFILE,
        EDIT_PROFILE,
        DELETE_PROFILE
    
} from '../type'

const ProfileState=(props)=> {

    const initialState={
        profile:[],
        success:false,
        error:false,
        serverMessage:null,
    
         
    }

const [state,dispatch]=useReducer(ProfileReducer,initialState)



//  create profile

const createProfile = async profileData=>{

    const config={
        header:{ 'Content-Type':'application/json' }
    }
    try{
        const res=await axios.post('/api/profile',profileData,config)
        dispatch({
        type: ADD_PROFILE,
        payload:res.data
        })
        clearSuccess();
    
    }catch (err){  
       dispatch({
        type:ERROR,
        payload:err.response.data
       })
       clearError();
    }
    }



// get profile
const getProfile= async ()=>{
       const config={
        header:{ 'Content-Type':'application/json'}
        }

    try{
        const res = await axios.get('/api/profile',config)
          
            dispatch({
            type: GET_PROFILE,
            payload:res.data
        })
       
         clearSuccess();

      }catch (err){

            dispatch({
             type:ERROR,
             payload:err.response.data
         })
         clearError();
      }
}






 // delete profile
const deleteProfile = async (id)=>{
    const config={
        header:{ 'Content-Type':'application/json'}
      }
    try{
         const res=await axios.delete(`/api/profile/${id}`,config)
        dispatch({
          type:DELETE_PROFILE,
          payload:res.data
      })
      getProfile()
      clearSuccess()
    
    }catch (err){  
        dispatch({
            type: ERROR,
            payload:err.response.data
        })
       clearError() 
    }
    } 



// clear error after 3 sec call

const clearError=()=>{
    setTimeout(() => { 
        dispatch({
           type:CLEAR_ERROR,
        })
       }, 3000);
}


// clear success after 3 sec call
const clearSuccess =()=>{
    setTimeout(() => { 
    dispatch({
       type:CLEAR_SUCCESS,
    })
   }, 3000);
 }





    return (
        <ProfileContext.Provider value={{
            profile:state.profile,
            success: state.success,
            error:state.error,
            serverMessage: state.serverMessage,
            createProfile,
            getProfile,
            deleteProfile,
            clearSuccess,
            clearError,
           
    }}>
       {props.children}
    </ProfileContext.Provider >
    )
}
export default ProfileState;
