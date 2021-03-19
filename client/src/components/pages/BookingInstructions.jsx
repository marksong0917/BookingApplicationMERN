import React from "react";
import { Link } from 'react-router-dom';

const BookingInstructions = () => {
    return (
        
        <div className="banner">
            <div className="container">
                <div className="banner-content">
                    <h1 className="header"> Thank you for booking with us! </h1>
                    <h4> Click the Check in link when you have arrived the day of your appointment</h4>
                    <div className="btn-section" >
                    <Link to="/" className="btn-style">Home</Link>
                    <Link to="./checkin" className="btn-style">Check In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookingInstructions