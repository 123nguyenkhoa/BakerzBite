import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Products</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
