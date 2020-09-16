import React,{useContext,useState,useEffect}from 'react';
import { createBrowserHistory } from 'history';
import moment from "moment";
import { Popconfirm,message} from 'antd';

import CustomerContext from '../../context/customerContext/CustomerContext';
import ProfileContext from '../../context/profileContext/ProfileContext'
import InvoiceContext from '../../context/invoiceContext/InvoiceContext'

export default function CartItem(props) {
  const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  const { items } = props
  const { getCustomer,customers } = useContext(CustomerContext);
  const { profile } = useContext(ProfileContext);
  const { addInvoice,success,error } = useContext(InvoiceContext);
  if(error !== null){
    console.log(error.msg)
    console.log(error)
  }
  const history = createBrowserHistory();
    useEffect(()=>{
      getCustomer()
      //eslint-disable-next-line
    },[]);
    const companyProfile = profile[0] || []
    //get order number if it true than set this order number in chalan
    const [ordNum, setOrdNum] = useState();
    const onSub=e=>{
            e.preventDefault()
            const actual = customers.filter(customer => customer.orderNumber == ordNum );
            const num = actual[0]
            if(num !== undefined){
              setOrderNumber(num.orderNumber);
              setCustomerId(num._id);
              setAddress(num.address);
              setmobile(num.mobile);
              setEmail(num.email);
              message.success('Set Order Number');
            }else{
              setOrderNumber('');
              setCustomerId('')
              setAddress('');
              setmobile('');
              setEmail('');
              message.error('Incorrect Order Number');
            }
      }

  
  const [orderNumber, setOrderNumber] = useState();
  const [customerId, setCustomerId] = useState();
  const [address, setAddress] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setEmail] = useState('');
  const [products, setProducts] = useState(items);



  const increment=(id,incre)=>{
        let tempProduct = [...products];
        const selectedProduct = tempProduct.find(item =>  item._id === id);
        const index = tempProduct.indexOf(selectedProduct);
        const product = tempProduct[index];
        delete product.count;
        delete product.inCart;
        delete product.total;
        delete product.updatedAt;
        delete product.createdAt
        product.stock = product.stock-incre
        product.qty = 1
        product.qty =incre
        setProducts(tempProduct)
   }

   const totalPacking=(id,packing)=>{
        let tempProduct = [...products];
        const selectedProduct = tempProduct.find(item =>  item._id === id);
        const index = tempProduct.indexOf(selectedProduct);
        const product = tempProduct[index];
        product.totalPacking = 1
        product.totalPacking = packing
        setProducts(tempProduct);
   }

   const removeItem=(id)=>{
        let tempProducts = [...products];
        const tempCart = tempProducts.filter(item => item._id !== id);
        setProducts(tempCart);
   }

    function confirm(id) {
        removeItem(id);
        message.success('Remove Successfull');
    }
  
    function cancel(e) {
        message.error('Click on No');
    }
     


    // const oldStock = items.map(product=>{
    //         product.stock,product._id
    // })
    // const selProduct=products.map(product=>{
    //   product.stock,product._id
    // })
     const customerObject={orderNumber,customerId,address,mobile,email}
     const invoiceObject={customerObject,products }

      const onSubmit=e=>{
          e.preventDefault();
          if( orderNumber == "" ||  address == "" || mobile == "" || email=="" || products==[]){
            message.error('Fill All File');
          }else{
              addInvoice(invoiceObject)
            // if(success){
              message.success('Successfully Complete Invoice');
              history.push('/dashboard')
            // }else{
            //   message.error('server error');
            // }
          }
          
        }

    return (
        
        <div className="m-auto text-center bg-dark text-white">
   

        <div className="card bg-dark text-white">
      <div className="card-header bg-dark text-white">
      Invoice
      <strong> {currentDate}</strong> 
      <span className="float-right"> <strong>Status:</strong>Pending</span>
      </div>
     
                          <div className="form-group  m-auto p-3">
                            <form onSubmit={e=>onSub(e)} className="form-inline">
                            <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">Set  Order Number: </label>
                              <input
                              type="number"
                              className="form-control"
                              placeholder="Enter Order Number"
                              name="ordNmb" 
                              onChange={e=> setOrdNum(e.target.value)}
                              required
                             />
                             </div>
                              <button type="submit" class="btn btn-primary mb-2">Set</button>
                             </form>
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
      <div className="table-wrapper-scroll-y my-custom-scrollbar">     
        <table className="table  table-responsive-sm table-dark text-center" style={{}}>
        <thead>
            
        <tr>
            <th scope="col">Serial No</th>
            <th>Image</th>
            <th scope="col">Product Details</th>
            <th scope="col">Unit</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Packing</th>
            <th scope="col">Remove Product</th>
        </tr>

        </thead>
    
        <tbody>
      
        {products.map((product,index)=>(
        <tr>
             <th scope="col">{index+1}</th>
                <th>
                  <img
                  src={`/${product.image}`}
                  style={{width:"3rem",height:"3rem"}}
                  className="img-fluid"
                  alt="product"
                  />
                 </th>
            <th scope="col">{product.name}</th>
            <th scope="col">{product.unit}</th>
            <th scope="col" style={{width:"150px"}}> 
                <div class="form-group ">
                <input
                type="number"
                className="form-control"
                name="address"
                placeholder={`current stock ${product.stock}`}
                onChange={(e)=>increment(product._id,e.target.value)}
                required
                />
                
                </div>
             
              </th>
            <th scope="col"  style={{width:"100px"}}>
            <div className="form-group">
                 <select id="inputState"
                  className="form-control"
                  name="totalPacking" 
                  onChange={(e)=>totalPacking(product._id,e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
            </th>
            <th>
            <Popconfirm
                 title="Are you sure delete this task?"
                 onConfirm={()=>confirm(product._id)}
                 onCancel={cancel}
                 okText="Yes"
                 cancelText="No"
               >
               <span><i className="fas fa-trash-alt"></i></span>
               </Popconfirm>
              
            </th>
            
        </tr>
        ))}
        </tbody>
    
        </table>

        <div className="float-right">
          <button onClick={(e)=>onSubmit(e)} className="btn btn-primary">Save Invoice</button>
        </div>
     </div>  
       
    </div>
    )
}