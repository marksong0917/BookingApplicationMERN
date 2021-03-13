import React, { useState } from 'react';
import Routes from './Routes';
import Nav from './shared/Nav' // or wherever we put the nav file
import Footer from './shared/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Get the token context
import { TokenProvider}from './sessions/TokenContext'

function App() {
  return (
    // Placing the Token context here allows the whole app to see the jwt
      <React.Fragment>
        <ToastContainer />
        <TokenProvider>
          <Nav/>
          <Routes/>
        </TokenProvider>
        <Footer />
      </React.Fragment>

  );
}

export default App;
