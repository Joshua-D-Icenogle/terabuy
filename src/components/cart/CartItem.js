import React from 'react';
import RemoveIcon from './remove.png'


function CartItem ({ item, removeFromCheckout, updateCheckoutItemQty }) {
    return(
    <li className="cart-item">
        <span><img className="cart-item-img" src={item.variant.image.src} /></span>
        <a href={"/product/" + item.variant.product.id} className="cart-item-name">{item.title}</a>
        <span className="cart-item-qty"><input onBlur={(e)=>updateCheckoutItemQty([{id: item.id, quantity: Number(e.target.value)}])} className="qty" defaultValue={item.quantity} /></span>
        <span className="cart-item-total px-3">${Number(item.variant.price) * Number(item.quantity)}</span>
        <span><img className="remove-icon" onClick={()=>removeFromCheckout([item.id])} src={RemoveIcon}/></span>
    </li>
    )
}

export default CartItem;