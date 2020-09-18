import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import CustomerInvoice from './invoice'
 
class ComponentToPrint extends React.Component {
 
  render() {
  
    return (
        <div className="bg-white text-drak m-0">
         
            <CustomerInvoice/>
            <div className="d-flex justify-content-center" style={{paddingTop:"100px"}}>
    <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.customgasketmfg.com/wp-content/uploads/Custom-Molded-Rubber-Products.jpg" alt="..." className="Image-Opacity img-thumbnail" style={{width:"250px",height:"250px"}}/>
    <img src="https://image.made-in-china.com/202f0j00jfKGkYuqYobr/Htv-Silicone-Rubber-for-Producing-Industrial-Spare-Parts-Motorbike-Parts-Motorcycle-Parts-Auto-Parts.jpg" alt="..." className="Image-Opacity img-thumbnail" style={{width:"250px",height:"250px"}}/>
    <img src="https://www.tradekey.com/images/uploadedimages/category/5877/Molded-Rubber-Products.jpg" style={{width:"250px",height:"250px"}} className="Image-Opacity img-thumbnail"/>
    </div>
     
        </div>
    );
  }
}
 
const InvoicePrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 
  return (
    <div className="bg-whiter text-dark">
      <ComponentToPrint ref={componentRef} />
   
    <div class="float-right pr-5">
    <button className="btn btn-primary ml-auto" style={{}} onClick={handlePrint}>Print</button>
    </div>
  
      
    </div>
  );
};
export default InvoicePrint