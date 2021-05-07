import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './components/products/Products';
import Navbar from './components/sections/navbar/Navbar';
import Cart from './components/cart/Cart';
import Product from './components/product/Product';
import './App.css';

function App( { client }) {

  const [featuredIndex, setFeaturedIndex] = useState(-1);
  const [collections, setCollections] = useState([])
  const [checkout, setCheckout] = useState({})

  async function getCollections () {
    const collections = await client.collection.fetchAllWithProducts()
    setCollections(collections)
  }

  async function createCheckout () {
    const newCheckout = await client.checkout.create()
    localStorage.setItem("checkout", newCheckout.id);
    await setCheckout(newCheckout)
  }

  async function getCheckout (id) {
    const newCheckout = await client.checkout.fetch(id);
    setCheckout(newCheckout)
  }

  async function addToCheckout (id, qty=1) {
    const item = [
      {
        variantId: id,
        quantity: qty,
      }
    ];
    
    const check = await client.checkout.addLineItems(checkout.id, item);
    setCheckout(check);
  }

  async function removeFromCheckout(lineItems) {
    const newCheckout = await client.checkout.removeLineItems(checkout.id, lineItems);
    setCheckout(newCheckout);
  }

  async function updateCheckoutItemQty(lineItems) {
    const newCheckout = await client.checkout.updateLineItems(checkout.id, lineItems);
    setCheckout(newCheckout);
  }

  async function removeAll() {
    const newCheckout = await client.checkout.removeLineItems();
    setCheckout(newCheckout);
  }

  function findFeaturedIndex (array) {
    array.forEach((collection, index) => {
      if(collection.title.toLowerCase().includes('featured')) {
        setFeaturedIndex(index)
      }
    })
  }

   useEffect(()=>{
    getCollections()

    if (localStorage.checkout) {
      getCheckout(localStorage.checkout)
    } else {
      createCheckout()
    }
   },[])

   useEffect(()=>{
     collections[0] && findFeaturedIndex(collections)
   },[collections])


   useEffect(()=>{
    checkout.completedAt && (function () {
      createCheckout()
    }());
   },[checkout.completedAt])


    return(
     <div className="App">

       <BrowserRouter>
        <Navbar categories={[]} cart={checkout} collections={collections} /> 
        <Route exact path="/">
          <h1 id="home-title">{collections[featuredIndex] && collections[featuredIndex].title}</h1>
          <Products featuredIndex={featuredIndex} collections={collections} addToCheckout={addToCheckout} />
        </Route>
        <Route exact path="/cart">
          <Cart checkout={checkout} removeAll={removeAll} removeFromCheckout={removeFromCheckout} updateCheckoutItemQty={updateCheckoutItemQty} />
        </Route>
        <Route exact path="/products/:index">
          <Products collections={collections} addToCheckout={addToCheckout} />
        </Route>
        <Route exact path="/product/:id">
          <Product client={client} addToCheckout={addToCheckout} />
        </Route>
      </BrowserRouter>
    
    </div>
    );
}

export default App;
