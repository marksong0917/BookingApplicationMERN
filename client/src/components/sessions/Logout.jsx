import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { UseUserUpdateContext } from './UserContext';

const Logout = () => {
  const userUpdate = UseUserUpdateContext();

  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    (async () => {
      try {
          localStorage.clear();
          const data = JSON.parse(localStorage.getItem('userData'));

          
          toast("You have successfully logged out", {
            type: toast.TYPE.SUCCESS
          });
          //updating token state will refresh the navbar
          userUpdate(data);
          // setting state twice causes double refresh
          setRedirect(true);
      } catch (error) {
        console.log(error)
        toast("There was an error while attempting to log you out", {type: toast.TYPE.ERROR});
      }
    })();
    //useEffect needs the dependency declared in here for userUpdate
  }, [userUpdate]);

  if (redirect) { 
    return (<Redirect to="/"/>);
  } 
  return null;
};

export default Logout;