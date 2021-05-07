import React from 'react';
import './category.css';

function CategoryHeading ({ name, totalProducts, searchQuery }) {
    return (
        <div id="category-heading">
            {searchQuery && <h1>{searchQuery}</h1>}
            <h1 id="category-title" className="text-left">{name}</h1>
            <form>
                <h5 className="text-white">Search Products</h5>
                <input type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default CategoryHeading;