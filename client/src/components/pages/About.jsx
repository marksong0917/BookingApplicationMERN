import React from 'react';
import { Link } from 'react-router-dom';
function About () {
    return (

        <body>

            <div className="banner">
                <div className="container">
                    <div className="banner-content">
                        <h1 className="header">
                        About the team behind App-Point
                        </h1>
                       <p>We are a team of developers trying to build a way to simple yet efficient way of connecting customers with merchants with minimal contact and contactless payment methods</p>
                        <div className="btn-section" >
                            <Link to="./login" className="btn-style">Book Now</Link>
                        </div>  
                    </div>
                </div>
            </div>
          </body>
    );
}

export default About