import React,{useReducer} from 'react'
import Axios from 'axios'
import ProductContext from '../productContext/productContext'
import ProducrReducer from '../productContext/productReducer'
import {
    GET_PRODUCT,
    UPLOAD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    EDIT_FORM,
    CLEAR_EDITFORM,
    ADD_CART,
    CLEAR_SUCCESS,
    ERROR,
    CLEAR_ERROR,
} from '../type'

 const ProductState=(props)=> {

    const initialState={
          products:[],
          product: null,
          cart:[],
          editForm:null,
          success:false,
          error:false,
          serverMessage:null,
    }

    const [state,dispatch]=useReducer(ProducrReducer,initialState)

// admin get all Product
const getProduct=async()=>{
  try {
    const res=await Axios.get('/api/product')
    dispatch({
      type:GET_PRODUCT,
      payload:res.data
  });
    clearSuccess();
  } catch (err) {
    dispatch({
      type:ERROR,
      payload:err.response.data
     })
     clearError();
  }
}

  //admmin upload product
  const uploadProduct= async data=>{
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    const config = {
      headers: {
          'Content-type': 'multipart/form-data'
       }
     };

try{
  
  const res= await Axios.post('/api/product',formData,config)
  dispatch({ 
      type:UPLOAD_PRODUCT,
      payload:res.data
  });
  clearSuccess();

}catch (err){  
  dispatch({
    type:ERROR,
    payload:err.response.data
   })
   clearError();
}
}


// delete product
const deleteProduct = async (id)=>{
  try{
       const res=await Axios.delete(`/api/product/${id}`)
      dispatch({
        type:DELETE_PRODUCT,
        payload:res.data
    })
    clearSuccess()
  
  }catch (err){  
    dispatch({
      type:ERROR,
      payload:err.response.data
     })
     clearError();
  }
  }  

  //
   //update product
 const updateProduct=async(product)=>{
  
  const config={
      header:{
          'Content-Type':'application/json'
      }
  }
  const res=await Axios.put(`/api/product/${product._id}`,product,config)

  try {
       
      dispatch({
          type:UPDATE_PRODUCT,
          payload:res.data
      }) 
  } catch (err) {
    dispatch({
      type:ERROR,
      payload:err.response.data
     })
     clearError();
  }
 
}

//edit product
const editFormFun=(product)=>{
      dispatch({
          type:EDIT_FORM,
          payload:product
      })  
  }
  
  //clear edit form
  const clearEditForm=()=>{
      dispatch({
          type:CLEAR_EDITFORM,
          
      }) 
  }
  

  const getItem = id => {
    const product = state.products.find(item => item._id === id);
    return product;
  };
   const addCart=(id)=>{
    let tempProduct = [...state.products]
    const index = tempProduct.indexOf(getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    const price = product.price;
    product.total = price;
    dispatch({
      type:ADD_CART,
      payload:{tempProduct,product},
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
        <ProductContext.Provider value={{
        products:state.products,
        getProduct,
        product:state.product,
        uploadProduct,
        deleteProduct,
        success:state.success,
        error:state.error,
        serverMessage:state.message,
        updateProduct,
        editForm:state.editForm,
        editFormFun,
        clearEditForm,
        addCart,
        cart:state.cart
    }}>
       {props.children}
    </ProductContext.Provider>
    )
}

export default ProductState;