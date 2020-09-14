import React,{useContext,useEffect,useState}from 'react'
import {Link} from 'react-router-dom'
import { message } from 'antd';
import ProductContext from '../../../context/productContext/productContext'

export default function EditProduct(props) {
    const { updateProduct,editForm,clearEditForm,success,serverMessage,error} = useContext(ProductContext);


    // error message
if(error && serverMessage){
    //show error message
  
    message.error(serverMessage)
  
  }
  // success aded 
  if(success && serverMessage){
   // show success message
   message.success(serverMessage);
  
  }
  
    useEffect(()=>{
      if(editForm !== null){
        setFormData(editForm);
      }else{
        setFormData({
           name:"",
            price:"",
            unit:"",
            stock:"",
            image:"",
       
        })}},[editForm]);


   const [formData,setFormData]=useState({
            name:"",
            price:"",
            unit:"",
            stock:"",
          
        });


        const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value})}
     
      
      const {name,price,unit,stock,image}=formData
      
      const onSubmit=e=>{
        e.preventDefault();
        updateProduct(formData);
        clearEditForm();
        props.history.push('/dashboard/all-product')
    
      }
      
    return (
        <div className="isProductListPageWrapper">
           <div className="col-md-6 offset-md-3">
                <h3 className="text-center display-6">Edit product</h3>
               
                  <form  onSubmit={onSubmit} enctype="multipart/form-data" >
                <div className="form-group">
                    <p>You can't update image.if you want change image you should delete product and upload new product</p>
      
                <img
                 src={`/${image}`}
                 style={{width:"5rem",height:"5rem"}}
                 className="img-fluid"
                 alt="product"
                 />
                </div> 
                    <div className="form-group">
                      <label htmlFor="name"> Name: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        name="name"
                         value={name}
                         onChange={e=> onChange(e)}
                         required
                      />
                    </div>


                    <div className="form-group">
                      <label htmlFor="price"> Price: </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Your Price"
                        name="price"
                        value={price}
                        onChange={e=> onChange(e)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="unit"> Unit: </label>
                      <select name="unit" 
                        className="form-control"
                        value={unit}
                        onChange={e=> onChange(e)}
                        required>
                      <option selected>Choose Unit...</option>
                      <option>Kg</option>
                      <option>Pice</option>
                      </select>
                    </div>
                          
                <div className="form-group">
                      <label htmlFor="stock"> Stock: </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Your Stock"
                        name="stock"
                        value={stock}
                        onChange={e=> onChange(e)}
                        required
                      />
                    </div>

                <button onSubmit={onSubmit} className="btn btn-primary my-3 d-block">Update Product</button>
               
                  </form>
                  <div>
                  <Link to="/dashboard/all-product" className="btn btn-primary btn-sm">Cancel </Link>
                  </div>
               </div>
        </div>
    )
}