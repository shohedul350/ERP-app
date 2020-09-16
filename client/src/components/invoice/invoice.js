import React,{useContext} from 'react'
import moment from "moment";
import { Spin } from 'antd';
import ProfileContext from '../../context/profileContext/ProfileContext'
import InvoiceContext from '../../context/invoiceContext/InvoiceContext'
export default function CustomerInvoice() {
        const { profile } = useContext(ProfileContext);
        const {invoice} = useContext(InvoiceContext)
        const companyProfile = profile[0] || []
        const sigInvoice = invoice || {}
        const {customer,products} = sigInvoice || {}
        const {address,orderNumber,mobile,email} = customer || {}



    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
   
    return (
    <div className="p-5 bg-white text-dark">
   {!products && !customer ? (
        <div className="spin">
        <Spin size="large"/>
    </div>
   ) :  (
       <div className="">
<div className="card ">
                <div className="card-header">
                Invoice
                <strong> {currentDate}</strong> 
                <span className="float-right"> <strong>Status:</strong>Delevired</span>
                </div>
                    <div className="card-body" style={{display:"flex"}}>
                    <div className="row mb-4 ">
                                <div className="col-sm-5 ">
                                <h6 className="mb-3 ">From:</h6>
                                <div>
                                    <strong>{companyProfile.companyName}</strong>
                                </div>
                                <div>Address: {companyProfile.companyAddress}</div>
                                <div>Email: {companyProfile.companyEmail}</div>
                                 <div>Phone: {companyProfile.companyMobile}</div>
                                </div>
                    
                    <div className="col-sm-5">
                        <h6 className="mb-3">To:</h6>
                        <div>
                        <strong>Order Number: {orderNumber}</strong>
                        </div>
                        <div>Address: {address}</div>
                                    <div>Email: {email}</div>
                        <div>Phone: {mobile}</div>
                    </div>
                    
                    
                    
                    </div>
                    </div>
      </div>
     
         

    <div className="customer product details m-auto text-center ">
        <table className="table  table-sm table-bordered table-striped text-center " style={{}}>
                <thead>   
                <tr>
                    <th scope="col">Serial No</th>
                    <th scope="col">Product Details</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Packing</th>
                </tr>
                </thead>
       <tbody>
                {invoice.products.map((produc,index)=>(
                        <tr>
                            <td className="">{index+1}</td>
                            <td className="">{produc.name}</td>
                            <td className="">{produc.unit}</td>
                            <td className="">{produc.qty}</td>
                            <td className="">{produc.totalPacking}</td>
                        </tr>
                ))}
                        
        </tbody>
        </table>
       
    </div>
   
       </div>
       
       
   )  }

      
    
        </div>
    )
}
