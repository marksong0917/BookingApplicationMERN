import React from 'react';
import { Link } from 'react-router-dom';
function About () {
    return (
            <div className="banner">
                <div className="container">
                    <div className="banner-content">
                        <h1 className="header">
                        What We Do
                        </h1>
                        <p>Connex'nShare is a hub for everyone in local to publish services as well as sharing tips or looking for missing things easier</p>
                        <p>Understanding that Covid-19 has affected to many local business and people, Connex'nShare has made this place for people in Simcoe County to share tips and post services during this frustrated time </p>
                        <p>This is an open place and non-profit organization</p>
                        <p>Our purpose simply just "Connex People in Local together"</p>
                        <div className="btn-section" >
                            <Link to="./login" className="btn-style">Book Now</Link>
                        </div>  
                    </div>
                </div>
            </div>
    );
}

export default About