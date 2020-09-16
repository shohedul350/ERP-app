import React,{useContext,useEffect} from 'react'
import moment from "moment";
import ProfileContext from '../../context/profileContext/ProfileContext'
import Context from '../../context/invoiceContext/InvoiceContext'
export default function CustomerInvoice(props) {
        const { profile } = useContext(ProfileContext);
        const {getSingleInvoice,invoice} = useContext(Context)
        const companyProfile = profile[0] || []
        const sigInvoice = invoice || {}
        const {customer,products} = sigInvoice || {}
        const {address,orderNumber,mobile,email} = customer || {}



    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    useEffect(()=>{
        getSingleInvoice(props.match.params.id)
      },[])
     
    return (
        <div className="container">
               <div className="card">
      <div className="card-header">
      Invoice
      <strong> {currentDate}</strong> 
      <span className="float-right"> <strong>Status:</strong>Delevired</span>
      </div>
     
                         
   
      <div class="card-body">
      <div class="row mb-4">
      <div class="col-sm-6">
      <h6 class="mb-3">From:</h6>
      <div>
          <strong>{companyProfile.companyName}</strong>
      </div>
    
                <div>Address: {companyProfile.companyAddress}</div>
                <div>Email: {companyProfile.companyEmail}</div>
                <div>Phone: {companyProfile.companyMobile}</div>
      </div>
      
      <div class="col-sm-6">
          <h6 class="mb-3">To:</h6>
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
        {/* <div class="d-flex justify-content-around pt-5">
                <div class="">
                <strong>SL NO-</strong>
                </div>
                <div class="">
                <strong>Chalan</strong>
                </div>
                <div class="">
               <strong>{currentDate}</strong>
                </div>
        </div>
            <div className="heading text-center p-4">
                <h3>LALMONIRHAT PLASTIC</h3>
                <h4>All Kinds of  Plastic,Rubber,Bag & Light Manufacturer & Suppliers.</h4>
                <h5>136/A Dholpur,Bow Bazar,Zatrabari,Dhaka</h5>
            </div> */}
         

            <div className="customer product details m-auto text-center">
                <table className="table  table-sm table-bordered table-striped text-center" style={{}}>
                {/* <thead>
                <tr>
                   
                <th scope="col">Order NO-{invoice.orderNumber}</th>
                    <th scope="col">Address-{invoice.address}</th>
                    <th colspan="2"></th>
                    
                </tr>
                </thead> */}
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

                  
                {  
             !products ? (
                
                    <div className="container d-flex justify-content-center p-4">
                                  <div className="spinner-border m-auto" role="status">
                                   <span className="sr-only">Loading...</span>
                               </div>
                                
                                 <p className="pl-1">Loading...</p> 
                                
                                </div>
                           
                                ) : (

    invoice.products.map((produc,index)=>(
            <tr>
              <td className="">{index+1}</td>
            <td className="">{produc.name}</td>
            <td className="">{produc.unit}</td>
            <td className="">{produc.qty}</td>
            <td className="">{produc.totalPacking}</td>
            
            </tr>
    )
          )
        )}
               
             
               
             
             
                </tbody>
                </table>
            </div>
    
        </div>
    )
}
