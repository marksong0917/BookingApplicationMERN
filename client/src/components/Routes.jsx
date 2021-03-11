import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Services from './pages/Services'; 
import Pricing from './pages/Pricing' 
import Login from './sessions/Login';
import Logout from './sessions/Logout';
import Register from './sessions/Register';

function Routes ({user,setUser}) {

    return (
       <Switch>
        <Route exact path="/" component={Home}/>

        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/pricing" component={Pricing}/>
        <Route exact path="/logout" component={Logout}/>
            <Route exact path="/login" render={
              renderProps => <Login
                {...renderProps}
                setUser={setUser}
              />
            }/>
            <Route exact path="/register-user" component={Register}/>
           </Switch> 
    );
}

export default Routes;