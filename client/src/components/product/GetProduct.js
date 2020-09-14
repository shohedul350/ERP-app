
import React,{useContext}from 'react'
import {Link} from 'react-router-dom'
import { Spin,Popconfirm, message } from 'antd';
import AuthContext from '../../context/authContext/authContext'
import ProductContext from '../../context/productContext/productContext'
import './style.css'
const GetProduct = () => {
  const {products,deleteProduct,editFormFun,addCart} = useContext(ProductContext)
  const {adminAuth} = useContext(AuthContext)
  function confirm(id) {
    deleteProduct(id);
    message.success('Delete Successfull');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

  return (
             !products.length ? (
                <div className="spin">
                    <Spin size="large"/>
                </div>
       
             ) : (
                <div className="isProductListPageWrapper text-white">
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table  className="table table-striped table-bordered table-dark text-center" style={{width:"100%"}}>
               <thead>
                <tr>
                  <th className="th-sm">Serial
                  </th>
                  <th className="th-sm" style={{}}>Image
                  </th>
                  <th className="th-lg" style={{}}>Product Name
                  </th>
                  <th className="th-sm">Unit
                  </th>
                  <th className="th-sm">Stock
                  </th>
                  <th className="th-sm">Price
                  </th>
                  <th className="th-sm">Total
                  </th>
                  <th className="th-sm">InCart
                  </th>
                  <th className="th-sm">Edit
                  </th>
                  <th className="th-sm">Delete
                  </th>
                </tr>
              </thead>
              <tbody>
             { products.map((product,index)=>(
                <tr key={index}>
                <td className="">
                  {index+1}
                </td>
               <td className="">
               <img
                 src={`/${product.image}`}
                 style={{width:"2rem",height:"2rem"}}
                 className="img-fluid"
                 alt="product"
                 />
                 </td>
               <td className="">{product.name}</td>
               <td className="">{product.unit}</td>
               <td className="">{product.stock  == 0 ? (<span className="alert alert-danger">
   Out Of Stock
</span>) : product.stock}</td>
               <td className="">{product.price}</td>
               <td className="">{product.price*product.stock}</td>
               <td className="" >
                 {product.stock  == 0 ? ( <button className="btn btn-info btn-sm card-size p-0"
                                   disabled> <i className="fas fa-cart-plus"/></button>) : (
                    <button className="btn btn-info btn-sm "
                    onClick={()=>addCart(product._id)}
                      disabled={product.inCart ? true : false}>
                      { product.inCart ? (
                    <p className="text-capitalize btn-sm p-0 m-0 mb-0"
                      disabled>
                          {""}
                          in cart
                        </p>
        ):(
            <i className="fas fa-cart-plus"/>
        )}

    </button>
                 )}
              
               </td>
               <td className="">
               {adminAuth? (
                <Link  onClick={()=>editFormFun(product)} to="/dashboard/edit-product" ><i class="fas fa-edit"></i></Link>
               ) : (
                <button className="btn btn-info btn-sm" disabled>Edit</button>
               ) }
                 
                 
                 </td>
               <td>
                 {adminAuth? (
                      <Popconfirm
                      title="Are you sure delete this task?"
                      onConfirm={()=>confirm(product._id)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >  
                    <span className="text-danger"><i className="fas fa-trash-alt"></i></span>
                    </Popconfirm>
                 ) : (
                  <button className="btn btn-danger btn-sm" disabled>Delete</button>
                 )}
                
            </td>    
                
          </tr>
                )
              )
             
           }

    </tbody>
  
  </table>
  </div>
  </div>
  )
  )
}
  

export default GetProduct;
