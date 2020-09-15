import React,{useReducer} from 'react'
import Axios from 'axios'
import CustomerContext from '../customerContext/CustomerContext'
import CustomerReducer from '../customerContext/CustomerReducer'
import {
  GET_CUSTOMERS,
  GET_CUSTOMER,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
  SEARCH_CUSTOMER,
  EDIT_FORM,
  CLEAR_EDITFORM,
  ERROR,
  CLEAR_ERROR,
  CLEAR_SUCCESS
} from '../type'

 const CustomerState=(props)=> {

    const initialState={
          customers:[],
          customer: {},
          editForm:{},
          serverMessage:null,
          success: false,
          search:[]
    }

    const [state,dispatch]=useReducer(CustomerReducer,initialState)

// admin get all customer
const getCustomers=async()=>{
  try {
    const res=await Axios.get('/api/customers')
    dispatch({
      type:GET_CUSTOMERS,
      payload:res.data
  })
  clearSuccess();
  } catch (err) {
    dispatch({
      type:ERROR,
      payload:err
     })
     clearError();
  }
}


//  get single customer
const getCustomer=async(id)=>{
  try {
    const res=await Axios.get(`/api/customer/${id}`)
    dispatch({
      type:GET_CUSTOMER,
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

  //admmin add customer
  const addCustomer= async data=>{
    
    const config = {
      headers: {
          'Content-type': 'application/json'
       }
     };

try{
  const res= await Axios.post('/api/customer',data,config)
  dispatch({ 
      type:ADD_CUSTOMER,
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

// delete customer
const deleteCustomer = async (id)=>{
  try{
       const res=await Axios.delete(`/api/deleteCustomer/${id}`)
      dispatch({
        type:DELETE_CUSTOMER,
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

  //
   //update customer
 const updateCustomer=async(customer)=>{

  const config={
      header:{
          'Content-Type':'application/json'
      }
  }
  const res=await Axios.put(`/api/customer/${customer._id}`,customer,config)
  try {
       
      dispatch({
          type:UPDATE_CUSTOMER,
          payload:res.data
      }) 
      clearSuccess();
  } catch (err) {
    console.log(err)
    dispatch({
      type:ERROR,
      payload:err
     })
     clearError();
  }
 
}

//edit customer form
const editFormFun=(customer)=>{
      dispatch({
          type:EDIT_FORM,
          payload:customer
      })  
  }
  
  //clear edit form
  const clearEditForm=()=>{
      dispatch({
          type:CLEAR_EDITFORM,
          
      }) 
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
        <CustomerContext.Provider value={{
      customers:state.customers,
       customer:state.customer,
       getCustomers,
       getCustomer,
       addCustomer,
       serverMessage:state.message,
       editForm:state.editForm,
       deleteCustomer,
       updateCustomer,
       editFormFun,
       clearEditForm
    }}>
       {props.children}
    </CustomerContext.Provider>
    )
}

export default CustomerState;
