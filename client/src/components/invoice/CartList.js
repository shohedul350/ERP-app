import React from 'react'
import CartItem from './CartItem'

export default function CartList(props) {
    const {items}=props
    return (
        <div className="container-fluid">
            {items.map((item,index)=>{
                return <CartItem key={item._id} item={item} value={items} index={index}/>
            })}
            
        </div>
    )
}