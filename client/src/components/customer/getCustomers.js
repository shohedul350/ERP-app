import React,{useContext,useEffect} from 'react'
import { Spin, message,Popconfirm } from 'antd';
import {Link} from 'react-router-dom'
import CustomerContext from '../../context/customerContext/CustomerContext'
import AuthContext from '../../context/authContext/authContext'
import EditCustomerModal from './EditCustomerModal'
export default function GetCustomers() {
const {getCustomers,customers,success,serverMessage,error,editFormFun,deleteCustomer} = useContext(CustomerContext)
    useEffect(()=>{
        getCustomers();
     // eslint-disable-next-line
    },[])
    const {adminAuth} = useContext(AuthContext)

    if(error && serverMessage){
      //show error message
      message.error(serverMessage)
    
    }
    // success login 
    if(success && serverMessage ){
       message.success(serverMessage);
    }
    
    function confirm(id) {
      deleteCustomer(id);
     
    }
    
    function cancel(e) {
      console.log(e);
      message.error('Click on No');
    }

    return (

      !customers.length ? (
        <div className="spin">
            <Spin size="large"/>
        </div>

        ) : (
      <div className="p-5 bg-dark" >
      <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table table-sm table-dark">
            <thead>
              <tr>
              <th scope="col">Serial</th>
              <th scope="col">OrderNumber</th>
              <th scope="col">Customer Address</th>
              <th scope="col">Mobile</th>
              <th scope="col">E-mail</th>
              <th scope="col">Customer Details</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
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
           <td className=""><Link to={`/dashboard/customer-details/${customer.orderNumber}`}><button className="btn btn-info btn-sm">view</button></Link></td>
           <td>
             { adminAuth ? ( 
              <span onClick={() => editFormFun(customer)} data-toggle="modal" data-target="#exampleModal" style={{ cursor: 'pointer' }} ><i  className="fas fa-pencil-alt"></i></span>
             ) : (
              <button className="btn btn-info btn-sm" disabled>Edit</button>
             ) 
             }
          </td>
          <td>
          {adminAuth? (
                      <Popconfirm
                      title="Are you sure delete this task?"
                      onConfirm={()=>confirm(customer._id)}
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
<EditCustomerModal/>
</div>


    </div>
     )

   
    )
}
