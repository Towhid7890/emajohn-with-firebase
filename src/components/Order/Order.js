import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Review from '../Review/Review';
import Cart from './../Cart/Cart';
import './Order.css';

const Order = () => {

    const[products,setProducts]= useProducts();
    const [cart,setCart]= useCart(products);

    const handleRemove = product => {
        const rest = cart.filter(pd =>pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className="shop-container">
            <div className="order-container">
                {
                    cart.map(product => <Review
                    product={product} key={product.id}
                    handleRemove={handleRemove}
                    ></Review>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/shipment'>
                        <button>Proceed Shipment</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;