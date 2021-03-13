import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { UseTokenUpdateContext } from '../sessions/TokenContext';

const Logout = () => {
  const tokenUpdate = UseTokenUpdateContext();

  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    (async () => {
      try {
          localStorage.clear();
          const data = JSON.parse(localStorage.getItem('userData'));
          tokenUpdate(data);
          toast("You have successfully logged out", {
            type: toast.TYPE.SUCCESS
          });
          setRedirect(true);
      } catch (error) {
        console.log(error)
        toast("There was an error while attempting to log you out", {type: toast.TYPE.ERROR});
      }
    })();
  }, []);

  if (redirect) { 
    return (<Redirect to="/"/>);
  } 
  return null;
};

export default Logout;