import React, { useState } from 'react';
import Routes from './Routes';
import Nav from './shared/Nav' // or wherever we put the nav file
import Footer from './shared/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


//Get the token context
import { TokenProvider }from './sessions/TokenContext'

function App() {
  const getUser = () => {
    const user = localStorage.getItem('userData');
    if (user) return JSON.parse(user);
    return false;
  }

  const [user, setUser] = useState(getUser());

  return (
    // Placing the Token context here allows the whole app to see the jwt
      <React.Fragment>
        <ToastContainer />
        <TokenProvider>
          <Nav user={user}/>
          <Routes user={user} setUser = {setUser} />
        </TokenProvider>
        <Footer />
      </React.Fragment>

  );
}

export default App;
