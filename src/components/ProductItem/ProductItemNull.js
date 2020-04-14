import React from 'react';

import './ProductItem.css';


function ProductItemNull() {

    const product = {
        description: '',
        rating: 'Рейтинг',
        price: 'Цена',
        color: 'Цвет',  
        material: 'Материал', 
        size: 'Размеры',
        mechanism: 'Механизм',
        seller: 'Продавец'
    }


    return (
       
        <li className="product__card">
            <div className="product__header">
                <div className="product__img">
                </div>
                <div className="product__title">
                    <span>{product.description}</span>
                </div>
            </div>
            <div className="product__properties">
                <div className="product__property product__property_1 product__property_filled">
                    <span className="item__null">{product.rating}</span>
                </div>
                <div className="product__property product__property_2">
                    <span className="item__null">{product.price}</span>
                </div>
                <div className="product__property product__property_3 product__property_filled">
                    <span className="item__null">{product.color}</span>
                </div>
                <div className="product__property product__property_4">
                    <span className="item__null">{product.material}</span>
                </div>
                <div className="product__property product__property_5 product__property_filled">
                    <span className="item__null">{product.size}</span>
                </div>
                <div className="product__property product__property_6">
                    <span className="item__null">{product.mechanism}</span>
                </div>
                <div className="product__property product__property_7 product__property_filled">
                    <span className="item__null">{product.seller}</span>
                </div>
            </div>
        </li>
    )
}

export default ProductItemNull;