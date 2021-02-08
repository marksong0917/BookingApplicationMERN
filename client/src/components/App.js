import React, {Fragment, useState} from 'react';
import Routes from './Routes';
import Nav from './shared/Nav' // or wherever we put the nav file
import Footer from './shared/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Admin, Resource } from 'react-admin';
//import simpleRestProvider from 'ra-data-simple-rest';

import  MerchantList  from './admin/MerchantList';


function App() {
  const getUser = () => {
    const user = sessionStorage.getItem('user');
    if (user) return JSON.parse(user);
    return false;
  }
  const [user, setUser] = useState(getUser());
  return (
    <React.Fragment>
      <ToastContainer/>
      <Nav />
      <Routes user={user} setUser = {setUser} />
      <Footer />
      {/* <Admin dataProvider={('http://localhost:3000')}>
        <Resource name="merchants" list= {MerchantList} />
      </Admin> */}
    </React.Fragment>

  );
}

export default App;
