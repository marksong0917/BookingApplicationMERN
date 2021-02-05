import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './pages/Index';
function Routes ({user, setUser}) {
    return (
       <Switch>
           <Route exact path="/" component={Home}/>

           </Switch> 
    );
}

// export default Routes;