import React,{useContext,useEffect} from 'react'
import { Spin,Popconfirm, message } from 'antd';
import {Link} from 'react-router-dom'
import CustomerContext from '../../context/customerContext/CustomerContext'

export default function GetCustomers() {
const {getCustomers,customers,success,serverMessage} = useContext(CustomerContext)
    useEffect(()=>{
        getCustomers();
     // eslint-disable-next-line
    },[])


    if(success && serverMessage){
        // show success message
        message.success(serverMessage);
       
       }
    return (
        <div className="container p-5" >
            
  
    {
             !customers? (
                <div className="spin">
                <Spin size="large"/>
            </div>
       
             ) : (<div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-sm table-dark table-striped">
                <thead>
                  <tr>
                  <th scope="col">Serial</th>
                  <th scope="col">OrderNumber</th>
                  <th scope="col">Customer Address</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Details</th>
        
                
                  </tr>
                </thead>
                <tbody>
             { customers.map((customer,index)=>(
                <tr key={index}> 
                <td className="">{index+1}</td>
               <td className="">{customer.orderNumber}</td>
               <td className="">{customer.address}</td>
               <td className="">{customer.mobile}</td>
               <td className="">{customer.email}</td>
               <td className=""><Link to={`customer-details/${customer.orderNumber}`}><button>view</button></Link></td>
          </tr>
          
                )
              )
           }

    </tbody>
  </table>
  </div>
    )
}
        </div>
    )
}
