import React from "react";
import { Link } from 'react-router-dom';

const CheckInInstructions = () => {
    return (
        
        <div className="banner">
            <div className="container">
                <div className="banner-content">
                    <h1 className="header"> Check In Instructions </h1>
                    <h4>Please wait in your car until we call you </h4>
                    <div className="btn-section" >
                    <Link to="/" className="btn-style">Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CheckInInstructions