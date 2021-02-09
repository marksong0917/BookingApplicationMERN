import React, {useState} from 'react';
import Routes from './Routes';
import Nav from './shared/Nav' // or wherever we put the nav file
import Footer from './shared/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../App.css'

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

    </React.Fragment>
  );
}

export default App;
