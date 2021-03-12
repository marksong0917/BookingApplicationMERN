import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
function Option () {
    return (
        <Fragment>


                <div className="banner">
                    <div className="container">
                        <div className="banner-content">
                            <h1 className="header">
                                Welcome to App-point Website!
                            </h1>
                            <h4>You want to register as a</h4>
                            <div className="btn-section" >
                                <Link to="./register-merchant" className="btn-style">Merchant</Link>
                                <Link to="./register-user" className="btn-style">User to book</Link>
                            </div>  
                        </div>
                    </div>
                </div>
                           
        </Fragment>
    );
};

export default Option;