import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getProducts, increasePagePagination } from '../../actions/actions';

import './Room.css';
import ProductsListTitle from '../../components/ProductsListTitle/ProductsListTitle';
import ProductsList from '../../components/ProductsList/ProductsList';


function Room({getProducts, products, productTitle, loading, pageItemsNum, pagePagination, increasePagePagination}) {
    
    useEffect( ()=> {
        getProducts(100);
    }, [getProducts])

    return (
        <div className='products-wrapper'>
            <ProductsListTitle title={productTitle}></ProductsListTitle>
            <ProductsList 
                products={products}
                loading={loading}
                pageItemsNum={pageItemsNum}
                pagePagination={pagePagination}
                increasePagePagination={increasePagePagination}
            ></ProductsList>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.app.products,
    productTitle: state.app.productTitle[0],
    loading: state.app.loading,
    pagePagination: state.app.pagePagination,
    pageItemsNum: state.app.pageItemsNum
})

const mapDispatchToProps = {
    getProducts,
    increasePagePagination
}


export default connect(mapStateToProps , mapDispatchToProps)(Room);