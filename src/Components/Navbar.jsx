import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        // <!-- Navbar Start -->
        <div className="container-fluid sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light border-bottom border-2 border-white">
                    <Link to="/" className="navbar-brand">
                        <h1>{import.meta.env.VITE_APP_SITE_NAME}</h1>
                    </Link>
                    <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/shop" className="nav-item nav-link">Shop</Link>
                            <Link to="/features" className="nav-item nav-link">Features</Link>
                            {/* <Link to="/services" className="nav-item nav-link">Services</Link> */}
                            <Link to="/testimonials" className="nav-item nav-link">Testimonial</Link>
                            <Link to="/contactus" className="nav-item nav-link">Contact</Link>
                            <Link to="/admin" className="nav-item nav-link">Admin</Link>
                            <div className="nav-item dropdown">
                                <Link to="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pranav Chachra</Link>
                                <div className="dropdown-menu bg-light mt-2">
                                    <Link to="/profile" className="dropdown-item">Profile</Link>
                                    <Link to="/cart" className="dropdown-item">Cart</Link>
                                    <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                    <button className="dropdown-item">Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        // <!-- Navbar End -->
    )
}
