import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

//-- redux cart
import { useSelector } from 'react-redux';

export default function Navbar() {

    const cart = useSelector((state) => state.cart)

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }
    return (
        <div className='bg-light shadow-lg'>
            <nav className="navbar navbar-inverse navbar-expand-lg py-3 shadow-lg fw-bold">
                <div className="container">

                    <NavLink className="Logo navbar-brand text-black" to="/">MEANFI SHOP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navBar">
                        <ul className="nav navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark text-black fw-bold"><i className="fa fa-sign-in me-1"></i>Login</NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark ms-2 text-black fw-bold"><i className="fa fa-user-plus me-1"></i>Register</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2 text-black fw-bold">
                                <i className="fa fa-shopping-cart me-1"></i>
                                {getTotalQuantity()}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
