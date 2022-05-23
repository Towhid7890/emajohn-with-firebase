import {faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css';

const Review = (props) => {
    const{product,handleRemove}= props;
    const{name,price,quantity,img,shipping} = product;
    return (
        <div className='review-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details-container">
                <div className='item-container'>
                <h4 className="item-title">{name}</h4>
                <p>Price : ${price}</p>
                <p>Shipping Charge : ${shipping}</p>
                <p>Quantity : {quantity}</p>
                </div>
                <div>
                    <button onClick={() =>handleRemove(product)} className='remove-btn'>
                        <FontAwesomeIcon className='remove-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;