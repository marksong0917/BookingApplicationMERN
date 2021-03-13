import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // npm install react-router-dom
import { Fragment } from 'react';
import { UseTokenContext } from '../sessions/TokenContext'

//still didn't add pricing link
// useContext can only be used in high level components and not inside function logic
function Nav() {

    const token = UseTokenContext();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* token placed here as an example */}
            <Link to="/" className="navbar-brand">App-point</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pricing" className="nav-link">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">       
                    {token ?  (
                    <Fragment>
                    <li className="nav-item" >Hello </li>   
                    <li className="nav-item">
                            Logout
                        <Link to="/logout" className="nav-link" >
                            <i className="fa fa-sign-out"></i>
                        </Link>
                    </li>
                    </Fragment>
                    ) : (
                    <Fragment>
                    <li className="nav-item">
                        <Link to="/register-option" className="nav-link">
                            <i className="fa fa-user-plus"></i>
                            Register
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/login" className="nav-link" >
                            <i className="fa fa-sign-in"></i>
                            Login
                        </Link>
                    </li>
                    </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;