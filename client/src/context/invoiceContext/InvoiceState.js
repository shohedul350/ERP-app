import React,{useReducer} from 'react'
import Axios from 'axios'
import InvoiceContext from '../invoiceContext/InvoiceContext'
import InvoiceReducer from '../invoiceContext/InvoiceReducer'
import {
  GET_INVOICES,
  GET_SINGLE_INVOICE,
  ADD_INVOICE,
  UPDATE_INVOICE,
  DELETE_INVOICE,
  EDIT_FORM,
  CLEAR_EDITFORM,
  CLEAR_SUCCESS,
  ERROR,
  CLEAR_ERROR,
  ADD_CART
} from '../type'

 const InvoiceState=(props)=> {

    const initialState={
          invoices:[],
          invoice: {},
          cart:[],
          prod:[],
          success:false,
          editForm:null,
          error:false,
          serverMessage:null
    }

const [state,dispatch]=useReducer(InvoiceReducer,initialState)

// admin get induvisula customer Invoice
const getInvoices=async(orderNumber)=>{
  try {
    const res=await Axios.get(`/api/invoice/${orderNumber}`)
    dispatch({
      type:GET_INVOICES,
      payload:res.data
  })
  } catch (error) {
    dispatch({
      type:ERROR,
      payload:error.response.data
   });
  }
}


// admin get single Invoice
const getSingleInvoice=async(invoiceId)=>{

  try {
    const res=await Axios.get(`/api/single-invoice/${invoiceId}`)
    console.log(res.data)
    dispatch({
      type:GET_SINGLE_INVOICE,
      payload:res.data
  })
  }catch (error) {
    console.log(error)
    dispatch({
      type:ERROR,
      payload:error.response.data
   });
  }
}

  //admmin add Invoice
  const addInvoice= async data=>{
     console.log(data)
    const config = {
      headers: {
          'Content-type': 'application/json'
       }
     };

try{
  const res= await Axios.post('/api/invoice',data,config)
  dispatch({ 
      type:ADD_INVOICE,
      payload:res.data
  }) 

} catch (error) {
  console.log(error)
  dispatch({
    type:ERROR,
    payload:error
 });
}
}

// delete Invoice
const deleteInvoice = async (id)=>{
  try{
       const res=await Axios.delete(`/api/deleteInvoice/${id}`)
      dispatch({
        type:DELETE_INVOICE,
        payload:res.data
    })
 
  
  }catch (error) {
    console.log(error)
    dispatch({
      type:ERROR,
      payload:error
   });
  }
  }  

  //
   //update Invoice
 const updateInvoice=async(invoice)=>{

  const config={
      header:{
          'Content-Type':'application/json'
      }
  }
  const res=await Axios.put(`/api/updateInvoice/${invoice._id}`,invoice,config)
  try {
       
      dispatch({
          type:UPDATE_INVOICE,
          payload:res.data
      }) 
  } catch (error) {
     console.log(error)
  }
 
}

//edit Invoice
const editFormFun=(invoice)=>{
      dispatch({
          type:EDIT_FORM,
          payload:invoice
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


 /// add bill 
   const getItem = id => {
    const singleInvoice = state.invoices.find(item => item._id === id);
    return singleInvoice;
  };
   const addCart=(id)=>{
    let tempInvoice = [...state.invoices]
    const index = tempInvoice.indexOf(getItem(id));
    const singleInvoice = tempInvoice[index];
    singleInvoice.inCart = true;
    const pro = singleInvoice.products
    // const price = singleInvoice.price;
    // singleInvoice.total = price;
    dispatch({
      type:ADD_CART,
      payload:{tempInvoice,singleInvoice,pro},
  })
  
  }
  
    return (
        <InvoiceContext.Provider value={{
       invoices:state.invoices,
       invoice:state.invoice,
       prod:state.prod,
       getInvoices,
       getSingleInvoice,
       addInvoice,
       success:state.success,
       editForm:state.editForm,
       deleteInvoice,
       updateInvoice,
       editFormFun,
       clearEditForm,
       error:state.error,
       addCart
    }}>
       {props.children}
    </InvoiceContext.Provider>
    )
}

export default InvoiceState;
