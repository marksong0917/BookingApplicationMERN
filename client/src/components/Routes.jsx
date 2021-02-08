import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'; 
<<<<<<< HEAD
import Services from './pages/Services';
=======
import Services from './pages/Services'; 
>>>>>>> 817b9e3b6775492f0fae4293c8805adf7518c362
import Login from './sessions/Login';
import Register from './sessions/Register';
import AdminLogin from './admin/AdminLogin'
import Admin from './admin/Admin'

//still didn't add pricing route
function Routes ({user,setUser}) {
    return (
<<<<<<< HEAD
      <Switch>
          <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
          <Route exact path="/login" render={
            renderProps => <Login
              {...renderProps}
              setUser={setUser}
            />
          }/>
          <Route exact path="/register-user" component={Register}/>
      </Switch> 
=======
       <Switch>
           <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
         <Route exact path="/services" component={Services}/>
           <Route exact path="/login" render={
              renderProps => <Login
                {...renderProps}
                setUser={setUser}
              />
            }/>
            <Route exact path="/register-user" component={Register}/>
           </Switch> 
>>>>>>> 817b9e3b6775492f0fae4293c8805adf7518c362
    );
}

export default Routes;