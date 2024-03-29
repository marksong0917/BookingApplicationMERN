import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
function Home () {
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