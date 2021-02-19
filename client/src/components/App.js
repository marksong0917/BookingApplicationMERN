import React, {Fragment, useState} from 'react';
import Routes from './Routes';
import Nav from './shared/Nav' // or wherever we put the nav file
import Footer from './shared/Footer'
import Axios from 'axios';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const getUser = () => {
    const userResp =  Axios.get('/api/users/profile');
    if (userResp === 200) return JSON.parse(userResp.data);
    return false;
  }
  const [user, setUser] = useState(getUser());
  return (
    <React.Fragment>
      <ToastContainer/>
      <Nav />
      <Routes user={user} setUser = {setUser} />
      <Footer />
    </React.Fragment>

  );
}

export default App;
