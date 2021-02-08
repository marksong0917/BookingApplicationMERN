import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Login from './sessions/Login';
import Register from './sessions/Register';
import AdminLogin from './admin/AdminLogin'
import Admin from './admin/Admin'
function Routes ({user,setUser}) {
    return (
       <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/about" component={About}/>
           <Route exact path="/admin-protected" component={Admin}/>
           <Route exact path="/admin-login" render={
              renderProps => <AdminLogin
                {...renderProps}
                setUser={setUser}
              />
            }/>
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