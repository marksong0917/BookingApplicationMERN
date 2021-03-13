import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { UseTokenContext } from '../sessions/TokenContext'

function Home () {
    const token = UseTokenContext();
    console.log("Home Token: " + token )
    return (
        <Fragment>
            <div className="banner">
                <div className="container">
                    <div className="banner-content">
                        <h1 className="header">
                            Welcome to App-point Website!
                        </h1>
                        <h4>Connect salon and consumers in 3s</h4>
                        <div className="btn-section" >
                            <Link to="./about" className="btn-style">What We Do</Link>
                            <Link to="./login" className="btn-style">Book Now</Link>
                        </div>  
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;