import React from 'react';
import CartItem from './CartItem';
import CartIcon from './shopping-cart.png'
import './cart.css'

function Cart ({ checkout, removeFromCheckout, updateCheckoutItemQty, removeAll }) {
    return(
        <div id="cart" className="col-12 col-md-10 col-lg-8 mt-5 mx-auto">
             {checkout.lineItems && checkout.lineItems.length > 0 &&
            <div>
            <ul id="cart-list" className="mx-auto p-0">
          
                
                {checkout.lineItems && checkout.lineItems.map((item, index)=> {
                    return <CartItem key={item.id} item={item} removeFromCheckout={removeFromCheckout} updateCheckoutItemQty={updateCheckoutItemQty} />
                })}
               
                <li className="bg-light p-3">Subtotal: ${checkout.totalPrice}</li>
             </ul>
             <button onClick={()=> {
                 const lineItems = checkout.lineItems.map((item)=>{
                    return item.id
                 })
                 removeFromCheckout(lineItems)
             }} className="btn btn-secondary">Empty Cart</button>
             <a onClick={()=>alert(`You are about to be directed to a test payment gateway. To complete a test transaction the card number must be "1".`)} href={checkout.webUrl} className="btn btn-primary">Checkout</a>
             </div>
           } {checkout.lineItems && checkout.lineItems.length == 0 && 
            <div id="empty-cart" className="py-5">  
             <img id="empty-cart-icon" src={CartIcon} /> 
             <h1>Your cart is empty</h1> 
            </div> 
           }
        </div>
    )
}

export default Cart;