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
    (async () => {
      try {
          localStorage.clear();
          setUser(false);
          toast("You have successfully logged out", {
            type: toast.TYPE.SUCCESS
          });
          setRedirect(true);
      } catch (error) {
        toast("There was an error while attempting to log you out", {type: toast.TYPE.ERROR});
      }
    })();
  }, []);

  if (redirect) { return (<Redirect to="/"/>);} 
  return null;
};

export default Logout;