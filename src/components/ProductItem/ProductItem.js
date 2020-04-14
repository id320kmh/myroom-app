import React from 'react';
import PropTypes from 'prop-types';

import './ProductItem.css';

import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import productImg from '../../assets/images/product2.jpg';



function ProductItem({product}) {

    const styles = {
        img: {
            width: `140px`,
            height: `140px`,
            background: `url(${productImg}) 0 0 no-repeat`,
            backgroundSize: 'cover',
            border: '1px solid #eee',
            borderRadius: '5px'
        },
        buttonOutlined : {
            width: '40px',
            border: '2px solid #E0ACAE',
        },
        cartButton: {
            fontSize: '10px', 
            backgroundColor: '#009A00', 
            marginLeft: '15px',
            textTransform: 'none'
        }
    }

    return (
       
        <li className="product__card">
            <div className="product__header">
                <div className="product__img">
                    <img style={styles.img} alt=""></img>
                </div>
                <div className="product__title">
                    <span>{product.description}</span>
                </div>
            </div>
            <div className="product__properties">
                <div className="product__property product__property_1 product__property_filled">
                    <Rating 
                        name="size-small" 
                        defaultValue={2}
                        value={product.rating}
                        size="small" 
                    />
                </div>
                <div className="product__property product__property_2">
                    <span className="item__null">{product.price} грн</span>
                </div>
                <div className="product__property product__property_3 product__property_filled">
                    <span>{product.color}</span>
                </div>
                <div className="product__property product__property_4">
                    <span>{product.material}</span>
                </div>
                <div className="product__property product__property_5 product__property_filled">
                    <span>{product.size}</span>
                </div>
                <div className="product__property product__property_6">
                    <span>{product.mechanism}</span>
                </div>
                <div className="product__property product__property_7 product__property_filled">
                    <span>{product.seller}</span>
                </div>
            </div>
            <div className="product__footer">
                <div className="product__footer-leftRow">
                    <Button 
                        variant="outlined" 
                        size="small" 
                        color="primary" 
                        style={styles.buttonOutlined}
                    >
                        <FavoriteBorderIcon fontSize="small" color="secondary" style={{color: '#E0ACAE'}} />
                    </Button>
                </div> 
                <div className="product__footer-RightRow">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="small" 
                        style={styles.cartButton}
                    >
                        <ShoppingCartOutlinedIcon fontSize="small" style={{marginRight: '5px'}}/>
                        Купить
                    </Button>
                </div>
            </div>
        </li>
    )
}

ProductItem.propTypes = {
    product: PropTypes.object,
}

ProductItem.defaultProps = {
    products: {},
}

export default ProductItem;