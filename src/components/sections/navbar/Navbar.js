import React from 'react';
import './navbar.css';
import MenuIcon from './menu.png';
import CartIcon from './cart.png';

function Navbar ({ collections, cart }) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid py-1">

      
            <a className="little-cart  d-lg-none" href="/cart">
                <img src={CartIcon} />  
                <span style={{display: cart.lineItems && cart.lineItems.length > 0 ? 'inline-block' : 'none'}}>{cart.lineItems && cart.lineItems.length}</span>               
            </a>
            <a className=" navbar-brand" href="/">Terabuy <span className="brand-slash-one">/</span><span className="brand-slash-two">/</span></a>
            <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src={MenuIcon} />
            </button>
        

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-auto mx-md-3">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown mx-md-3">
                            <a className="nav-link nav-text dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {collections[0] && collections.map((item, index)=>{
                                return <li key={index}><a className="dropdown-item" href={`/products/${index}`}>&bull; {item.title}</a></li>
                            })}
                            </ul>
                        </li>

                    </ul>
                </div>
                <a className="big-cart d-none d-lg-inline-block" href="/cart">
                  <img src={CartIcon} />
                  <span style={{display: cart.lineItems && cart.lineItems.length > 0 ? 'inline-block' : 'none'}}>{cart.lineItems && cart.lineItems.length}</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;