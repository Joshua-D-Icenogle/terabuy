import React, { useState } from 'react';

function ProductCard ({ product, addToCheckout }) {

    return(
      
            <div className="col col-12 col-md-6 col-lg-4 p-xl-4 card mx-autoproduct-card mx-auto mx-md-0 mt-5"> 
            <div className="card-wrap p-2 bg-white"> 
            <img src={product.images[0].src} className="p-2 p-lg-4 product-card-img card-img my-auto" alt={product.title} />
            <a href={`/product/${product.id}`}className="product-card-btn">View</a> 
            </div>
            <div className="card-info">
                <a className="product-card-title" href={`/product/${product.id}`}>
                <h3>{product.title}</h3>
                </a>
                <hr /> 
                <div className="container">
                <div className="row m-auto">
                <h5 className="my-auto card-price col col-4">${product.variants[0].price}</h5>   
                <a onClick={()=>addToCheckout(product.variants[0].id)} className="my-auto card-add-to-cart col col-8">Add to cart</a>
                </div>
                </div>
                
            </div>
            </div>
           
    )
}

export default ProductCard;