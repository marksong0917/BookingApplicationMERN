import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
function Message () {
    return (
        <Fragment>
                <div className="banner">
                    <div className="container">
                        <div className="banner-content">
                            <h1 className="header">
                                You have successfully created your merchant account!
                            </h1>
                            <h4>Please click on the button below to login</h4>
                            <div className="btn-section" >
                                <Link to="http://localhost:4000/login" className="btn-style">Login Now</Link>
                            </div>  
                        </div>
                    </div>
                </div>                           
        </Fragment>
    );
};

export default Message;