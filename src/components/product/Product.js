import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';
import CarouselItem from './CarouselItem';

function Product ({ client, addToCheckout }) {
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1)
    const { id } = useParams();

    function updateQty (num) {
        setProduct(num)
    }

    async function getProduct (id) {
        const product = await client.product.fetch(id)
        setProduct(product)
    }

    useEffect(()=>{
        getProduct(id)
    },[])

    return(
    
        <div id="product">
        { product.id &&
            <div>
                <div id="carouselExampleFade" className="mt-5 col-12 col-md-8 col-lg-6 mx-auto carousel slide carousel-fade" data-bs-interval="false" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        product.images.map((image, index)=> <CarouselItem key={image.id} url={image.src} index={index} />)
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div> 
                <h2 className="text-white mt-5">{product.title}</h2>   
                <h3 className="text-white">${product.variants[0].price}/ea</h3>  
                <div>
                    <a className="btn btn-secondary mr-1" onClick={e=>setQty(qty - 1)}>-</a><input onChange={e=> setQty(Number(e.target.value))} value={qty} className="form-control mx-1 d-inline text-center" type="text" id="qty-input"/><a onClick={e=>setQty(qty + 1)} className="btn ml-1 btn-secondary">+</a>
                </div>
                <a onClick={()=>addToCheckout(product.variants[0].id, qty)} className="btn mt-1 px-5 btn-primary">Add to cart</a>
                <div className="col-lg-8 mx-auto product-description mb-lg-2 m-5 py-5">
                    <h4>Description:</h4>
                    <p className="card-text px-3 col-10 col-md-8 col-lg-6 mx-auto"dangerouslySetInnerHTML={{__html:product.description}}></p>
                </div>
              </div>
              }      
        </div>
        
    )


}

export default Product;