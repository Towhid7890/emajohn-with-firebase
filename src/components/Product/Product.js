
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const{handleAddToCart,product}=props;
    const{name,img,seller,quantity,price,ratings}=props.product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
            <p className="product-name">{name}</p>
            <p>Price : {price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} starts</p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className="button-cart">
                <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                
            </button>
        </div>
    );
};

export default Product;