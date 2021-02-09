import React, { useEffect, useState, Fragment } from 'react'
import Axios from 'axios';
function Admin () {

  
    // const getAdmin = async () => {
    //   const resp = await Axios.get('/api/users/admin-protectd');
    //   if (resp.status === 200) setAdmin(resp.data);
    // };

    return (
        <Fragment>
                <div className="banner">
                    <div className="container">
                        <div className="banner-content">
                            <h1 className="header">
                                Welcome to Admin Dashboard
                            </h1>
                            <h4>App-point</h4>
             
                        </div>
                    </div>
                </div>
        </Fragment>
    );
};

export default Admin;