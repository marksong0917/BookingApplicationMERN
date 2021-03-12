import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Services from './pages/Services'; 
import Pricing from './pages/Pricing' 
import Login from './sessions/Login';
import Register from './sessions/Register';
import MerchantRegister from './sessions/MerchantRegister';
import Message from './pages/Message'
import CreateMerchant from './pages/CreateMerchant'
import RegisterOption from './pages/RegisterOption'
import Logout from './sessions/Logout';
import Booking from './pages/Booking';

function Routes ({user,setUser}) {

    return (
       <Switch>
        <Route exact path="/" component={Home}/>

        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/pricing" component={Pricing}/>
        <Route exact path="/login" render={
              renderProps => <Login
                {...renderProps}
                setUser={setUser}
              />
        }/>
        <Route exact path="/logout" render={
              renderProps => <Logout
                {...renderProps}
                setUser={setUser}
              />
            }/>
            
        <Route exact path="/register-user" component={Register}/>
        <Route exact path="/register-merchant" component={MerchantRegister}/>
        <Route exact path="/create-merchant" component={CreateMerchant}/>
        <Route exact path="/message" component={Message}/>
        <Route exact path="/register-option" component={RegisterOption}/>
        <Route exact path="/booking" component={Booking} />
      </Switch> 
    );
}

export default Routes;