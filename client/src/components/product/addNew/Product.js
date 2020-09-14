import React, { useState, useContext} from "react";
import { message } from 'antd';
import ProductContext from '../../../context/productContext/productContext'
import AuthContext from '../../../context/authContext/authContext'

const Product=()=> {

const {uploadProduct,error,serverMessage,success} = useContext(ProductContext);
const {adminAuth} = useContext(AuthContext);
// error message
if(error && serverMessage){
  //show error message

  message.error(serverMessage)

}
// success aded 
if(success && serverMessage){
 // show success message
 message.success(serverMessage);
 alert('upload')
}

    const [formData,setFormData]=useState({
      name:"",
      price:"",
      unit:"",
      stock:"",
      image:"",
  });


  const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value})}
  const upHandler=e=>{setFormData({...formData,[e.target.name]:e.target.files[0]})}

const {name,price,unit,stock,}=formData


const onSubmit=e=>{
  e.preventDefault();
  
  uploadProduct(formData)
  setFormData({
    name:"",
    price:"",
    unit:"",
    stock:"",
    image:"",
  })


}

    return (


        <div className="row " style={{background:""}}>
                <div className="col-md-6 offset-md-3">
                <h4 className="text-center display-6">Upload product</h4>
               
                  <form  onSubmit={onSubmit} encType="multipart/form-data" >
                  <div className="form-group">

                  </div>
                  <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                 className="form-control" 
                 name="image"
                 onChange={e=> upHandler(e)}
                 required/>                    
                </div> 
                    <div className="form-group">
                      <label htmlFor="name">Product Name: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter here"
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
                        placeholder="Enter here"
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
                        placeholder="Enter here"
                        name="stock"
                        value={stock}
                         onChange={e=> onChange(e)}
                         required
                      />
                    </div>
             {adminAuth ? (
              <button onSubmit={onSubmit} className="btn btn-primary my-3 d-block">Upload Product</button>
             ):(
               <div>
              <button  className="btn btn-primary my-3 d-block" disabled>Disable</button>
              <span className="text-info p-0">* Only Admin can upload</span>
              </div>
             )}
               
                  </form>
               </div>
               </div>
             
    )
}

export default Product

