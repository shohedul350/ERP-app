import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Spin, message } from 'antd';
import moment from "moment";
import Context from '../../context/invoiceContext/InvoiceContext'
export default function CustomerDetails(props) {
const {getInvoices,invoices,addCart,serverMessage,success} = useContext(Context)

    useEffect(()=>{
        getInvoices(props.match.params.orderNumber);
    //eslint disable nextline
    },[])


  useEffect(()=>{
    if(!success && serverMessage){
        //show error message
        console.log(serverMessage)
        message.error(serverMessage)
      
      }
      // success aded 
      if(success && serverMessage){
       // show success message
       message.success(serverMessage);
      }
  },[serverMessage])// error message
    return (

<div>
    { !invoices.length ? (
        <div className="spin">
                <Spin size="large"/>
            </div>
    ) : (
        <div className="table-wrapper-scroll-y my-custom-scrollbar bg-dark" >
            <Link to="/dashboard/create-bill">Create bill</Link>
    <table className="table table-sm table-dark table-striped text-center">
    <thead>
      <tr>
        <th scope="col">Serial</th>
        <th scope="col">Order Number</th>
        <th scope="col">Date</th>
        <th scope="col">Details</th>
        <th scope="col">Add To Bill</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
  
 


    {invoices.map((invoice,index)=>(
            <tr>
              <td className="text-uppercase">{index+1}</td>
            <td className="text-uppercase">{invoice.orderNumber}</td>
              <td className="text-uppercase">{moment(invoice.createdAt).format('MMMM Do YYYY')}</td>
            <td className=""><Link to={`/dashboard/invoice-print/${invoice._id}`}><button>view</button></Link></td>
            <td className="">
            <button className="btn btn-info"
                     onClick={()=>addCart(invoice._id)}
                      disabled={invoice.inCart ? true : false}>
                      { invoice.inCart ? (
                    <p className="text-capitalize mb-0"
                      disabled>
                          {""}
                          in cart
                        </p>
        ):(
            <i className="fas fa-cart-plus"/>
        )}

    </button>


            </td>
             <td><span><i  className="fas fa-trash-alt"></i></span></td>
            
            </tr>
 
          )
        )}

    </tbody>
  </table>
        </div>
    )}

</div>
       
        
    )
}
