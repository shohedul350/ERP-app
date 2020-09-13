import React, { useState, useContext} from "react";
import { message } from 'antd';
import ProductContext from '../../../context/productContext/productContext'

const Product=()=> {

const {uploadProduct,error,serverMessage,success} = useContext(ProductContext);
// error message
if(error && serverMessage){
  //show error message
  console.log(serverMessage)
  message.error(serverMessage)

}
// success aded 
if(success && serverMessage){
 // show success message
 message.success(serverMessage);
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
  e.target.reset();

//   if(!formData.categories){
//     alert('please select categories')
//   }
//   uploadData(formData)
//   alert('Success')
}

    return (


        <div className="row " style={{background:""}}>
                <div className="col-md-6 offset-md-3">
                <h3 className="text-center display-6">Upload product</h3>
               
                  <form  onSubmit={onSubmit} enctype="multipart/form-data" >
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
                    {/* <div className="form-group">
                      <label htmlFor="descriptin">Product Descriptin: </label>
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Enter Your descriptin"
                        name="info"
                        value={info}
                        onChange={e=> onChange(e)}>
                       required
                        </textarea>
                    </div> */}

                
              

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

                <button onSubmit={onSubmit} className="btn btn-primary my-3 d-block">Upload Product</button>
                  </form>
               </div>
               </div>
             
    )
}

export default Product

