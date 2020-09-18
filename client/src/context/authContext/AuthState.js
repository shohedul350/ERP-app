import React,{useReducer} from 'react'
import axios from 'axios'
import AuthContext from '../authContext/authContext'
import AuthReducer from '../authContext/authReducer'
import setToken from '../../utils/setToken'
import {
        SUCCES_REGISTER,
        SUCCES_LOGIN,
        LOG_OUT,
        SET_ADMIN,
        SET_USER,
        SET_ALL,
        DELETE_AUTH,
        CLEAR_SUCCESS,
        CHANGE_PASSWORD,
        ERROR,
        CLEAR_ERROR,
        EDIT_FORM,
        CLEAR_EDITFORM,
        UPDATE_USER_ROLE,
        SEND_FORGET_REQUEST,
        RESET_REQUEST
    
} from '../type'

const AuthState=(props)=> {

    const initialState={
        auth: localStorage.token ? true : false,
        authLoad:{},
        allAuth: [],
        adminAuth:false,
        userAuth:false,
        success:false,
        error:false,
        serverMessage:null,
        editForm:{},
         
    }

const [state,dispatch]=useReducer(AuthReducer,initialState)



//  register auth test complete

const registerAuth = async authData=>{
    const config={
        header:{ 'Content-Type':'application/json' }
    }
    try{
        const res=await axios.post('/api/register',authData,config)
        dispatch({
        type:SUCCES_REGISTER,
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



// get auth test complete
const getAuth= async ()=>{
       const config={
        header:{ 'Content-Type':'application/json'}
        }

    try{
        const res = await axios.get('/api/auth',config)
            if(res.data.auth.role == 'admin'){
            dispatch({
            type:SET_ADMIN,
            payload:res.data
        })
        }else{
        dispatch({
            type:SET_USER,
            payload:res.data
        })  
          }
         clearSuccess();

      }catch (err){

            dispatch({
             type:ERROR,
             payload:err.response.data
         })
         clearError();
      }
}


  // get all auth  test complete
const getAllAuth= async ()=>{
    if(localStorage.token){
        setToken(localStorage.token)
      }
const config={
        header:{ 'Content-Type':'application/json'}
      }


      try{
          const res=await axios.get('/api/all-auth',config)
          dispatch({
              type: SET_ALL,
              payload:res.data.auth
          })

    clearSuccess()
      }catch (err){
         dispatch({
             type: ERROR,
             payload:err.response.data
         })
         clearError()
      }
 }




 // delete auth test complete
const deleteAuth = async (id)=>{
    const config={
        header:{ 'Content-Type':'application/json'}
      }
    try{
         const res=await axios.delete(`/api/delete-auth/${id}`,config)
        dispatch({
          type:DELETE_AUTH,
          payload:res.data
      })
      getAllAuth()
      clearSuccess()
    
    }catch (err){  
        dispatch({
            type: ERROR,
            payload:err.response.data
        })
       clearError() 
    }
    } 

     //Login   test complete
    const loginAuth = async authData=>{
        const config={
            header:{
                'Content-Type':'application/json'
            }
        }
        try{
            const res=await axios.post('/api/login',authData,config)
            dispatch({
            type:SUCCES_LOGIN,
            payload:res.data,
       
            })          
            if(localStorage.token){
                setToken(localStorage.token)
            }  
            getAuth();
            clearSuccess()
        }catch (err){ 
           dispatch({
               type:ERROR,
               payload: err.response.data
           })
           clearError()
        }

    }

        // log out  test complete
        const logout=()=>{
            dispatch({
                type:LOG_OUT
            })
        }
  

   //update user role
   const updateUserRole=async(auth)=>{

    const config={
        header:{
            'Content-Type':'application/json'
        }
    }
    const res=await axios.put(`/api/change-auth-role/${auth._id}`,auth,config)
    try {
         
        dispatch({
            type:UPDATE_USER_ROLE,
            payload:res.data
        }) 
        clearSuccess();
    } catch (err) {
      dispatch({
        type:ERROR,
        payload:err.response.data
       })
       clearError();
    }
   
  }
  
  //edit user role form
  const editFormFun=(auth)=>{
        dispatch({
            type:EDIT_FORM,
            payload:auth
        })  
    }
    
    //clear edit form
    const clearEditForm=()=>{
        dispatch({
            type:CLEAR_EDITFORM,
            
        }) 
    }
    


 

   // chaange password test complete
   const changePassword = async data=>{
   const config={
        header:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res=await axios.put('/api/change-password',data,config)
        dispatch({
        type:CHANGE_PASSWORD,
        payload:res.data,
   
        })  
        clearSuccess()         
    
    }catch (err){ 
       dispatch({
           type:ERROR,
           payload: err.response.data
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


 const forgetRequest = async data=>{

    const config={
        header:{
            'Content-Type':'application/json'
        }
    }
    try{

        const res=await axios.post('/api/forget',data,config)
        dispatch({
        type: SEND_FORGET_REQUEST,
        payload:res.data,
   
        })          

        clearSuccess()
    }catch (err){ 
       dispatch({
           type:ERROR,
           payload: err.response.data
       })
       clearError()
    }

}



const resetRequest = async (data,token)=>{

    const config={
        header:{
            'Content-Type':'application/json'
        }
    }
    try{

        const res=await axios.post(`/api/reset/${token}`,data,config)
        dispatch({
        type: RESET_REQUEST,
        payload:res.data,
   
        })          

        clearSuccess()
    }catch (err){ 
       dispatch({
           type:ERROR,
           payload: err.response.data
       })
       clearError()
    }

}

    return (
        <AuthContext.Provider value={{
            serverMessage: state.serverMessage,
            adminAuth: state.adminAuth,
            userAuth: state.userAuth,
            getAuth,
            authLoad: state.authLoad,
            getAllAuth,
            allAuth: state.allAuth,
            success: state.success,
            clearSuccess,
            error:state.error,
            clearError,
            registerAuth,
            logout,
            editForm:state.editForm,
            updateUserRole,
            editFormFun,
            clearEditForm,
            deleteAuth,
            changePassword,
            auth: state.auth,
            loginAuth,
            forgetRequest,
            resetRequest
    }}>
       {props.children}
    </AuthContext.Provider >
    )
}
export default AuthState;
