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
    <div className="bg-white text-dark">
   {!products && !customer ? (
        <div className="spin">
        <Spin size="large"/>
    </div>
   ) :  (
       <div className="p-5" style={{height:"500px", width:"100%"}}>
    <div className="card mt-5">
                <div className="card-header">
                <div class="d-flex justify-content-around">
   <div>  Invoice id: {sigInvoice._id}</div>
                    <div> <strong> {currentDate}</strong> </div>
                    <div> <span className="float-right"> <strong>Status:</strong>Delevired</span></div>
                </div>
              
               
                </div>
                    <div className="card-body p-5 m-0">

                                <div class="float-left pl-5">
                                        <h6 className="mb-2 text-dark ">From:</h6><div>
                                        <strong>{companyProfile.companyName}</strong>
                                        </div>
                                        <div>Address: {companyProfile.companyAddress}</div>
                                        <div>Email: {companyProfile.companyEmail}</div>
                                        <div>Phone: {companyProfile.companyMobile}</div>
                                </div>
                            
                                <div class="float-right pr-5">
                                        <h6 className="mb-2 text-dark">To:</h6><div>
                                        <strong>Order Number: {orderNumber}</strong>
                                        </div>
                                        <div>Address: {address}</div>
                                        <div>Email: {email}</div>
                                        <div>Phone: {mobile}</div>
                                </div>
                            
                    </div>
                 


      </div>
     
         

    <div className=" m-auto text-center ">
        <table className="table  table-sm table-bordered table-striped text-center ">
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
