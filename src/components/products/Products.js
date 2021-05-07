import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import './products.css';

function Products ({ featuredIndex, collections, addToCheckout }) {
    const { index } = useParams();
    
    return (
        <div>
            <h1 className={!index && "d-none"} id="collection-title">{index && collections[index] && collections[index].title}</h1>
            <div className="container mx-auto">
                <div className="row mx-auto">
                  { index ?
                  collections[index] && collections[index].products.map(product => {
                    return <ProductCard key={product.id} product={product} addToCheckout={addToCheckout} />
                    })
                    :
                    collections[featuredIndex] && collections[featuredIndex].products.map(product => {
                        return <ProductCard key={product.id} product={product} addToCheckout={addToCheckout} />
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Products;