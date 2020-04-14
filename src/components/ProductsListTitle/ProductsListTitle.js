import React from 'react';


import './ProductsListTitle.css';


function ProductsListTitle({title}) {

    return (
        <div className="products-list-title">
            <h1>{title}</h1>
        </div>
    )
}

export default ProductsListTitle;