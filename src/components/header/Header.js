import React from 'react';
import logo from '../../images/Logo.svg'
import "./header.css";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const[user] = useAuthState(auth)
    const handleSignOut=()=> {
        signOut(auth);
    }
    return (
        <nav className="header-nav">
            <img src={logo} alt="" />
            <div>
            <Link to="/shop">Shop</Link>
            <Link to="/order">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
            { user?<button onClick={handleSignOut}>SignOut</button>:
                <Link to="/login">Login</Link>}
            </div>
        </nav>
    );
};

export default Header;