  
import React from 'react'
import {Link} from 'react-router-dom'
const EmptyCart = () => {
   return (
       <div className="" style={{height:"350px"}}>
          <div className="row test-center">
              <div className="col-10 mx-auto text-center text-title pt-5">
                  <h1>Your Invoice cart is currently empty</h1>
                  <p className="p-5">Go to product page and add to cart product for invoice</p>
                <Link to="/dashboard/all-product"><button className="btn btn-info btn-sm">All Products</button></Link>
              </div>
          </div>
       </div>
   )
}

export default EmptyCart