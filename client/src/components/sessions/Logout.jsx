import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
//import {UpdateTokenContext} from '../sessions/TokenContext'
const Logout = ({setUser}) => {

  const [redirect, setRedirect] = useState(false);
  // const updateToken = UpdateTokenContext();
  useEffect(() => {
    //why is it async???
      try {
        // clear storage
        localStorage.clear();
        // set no user
        //setUser(false);

        // toast message
        toast("You have successfully logged out", {
          type: toast.TYPE.SUCCESS
        });

        // set redirect
        setRedirect(true);
      } catch (error) {
        toast("There was an error while attempting to log you out", {type: toast.TYPE.ERROR});
      }
    }, []);

  if (redirect) { return (<Redirect to="/"/>);} 
  return null;
};

export default Logout;