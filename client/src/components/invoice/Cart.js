
import React,{useContext,useEffect} from 'react'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'
import ProductContext from '../../context/productContext/productContext'
 const Cart = () => {
    const {cart}=useContext(ProductContext)
    
     if(cart.length>0){
        return (
   <div className="bg-dark text-white">
      <CartItem items={cart}/>
    </div>
        )
    }
     return <EmptyCart/>
  
}

export default Cart