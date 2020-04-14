import React from 'react';
import PropTypes from 'prop-types';

import './ProductsList.css';
import ProductItem from '../ProductItem/ProductItem';
import ProductItemNull from '../ProductItem/ProductItemNull';
import Loader from './Loader/Loader';



function ProductsList({products, loading, pageItemsNum, pagePagination, increasePagePagination}) {

    const scrollHandler = (e) => {
        e.stopPropagation();

        if (e.currentTarget.scrollLeft > (e.currentTarget.scrollWidth-e.currentTarget.clientWidth)*0.9 ) {
            increasePagePagination();
        }

    }

    return (
        <div className="products-list-wrapper">
            <ul className="product-list-inner" onScroll={scrollHandler}>
                {/* <ProductItemNull></ProductItemNull> */}
                {
                    loading ? (
                        <Loader></Loader>
                    ) : (
                        <ProductItemNull></ProductItemNull>
                    )
                }
                {
                    products.length > 0 
                        && products
                            .filter( (item, index) => index < pageItemsNum*pagePagination )
                            .map( product => {
                                return <ProductItem key={product.id} product={product}></ProductItem>
                            })
                }
                
            </ul>
        </div>
    )
}

ProductsList.propTypes = {
    products: PropTypes.array,
    loading: PropTypes.bool,
    pageItemsNum: PropTypes.number, 
    pagePagination: PropTypes.number, 
    increasePagePagination: PropTypes.func,

}

ProductsList.defaultProps = {
    products: [],
    loading: true,
    pageItemsNum: 20, 
    pagePagination: 1, 
    increasePagePagination: () => {},
}

export default ProductsList;

