import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Logout = () => {
  console.log("didn't reach1")
  const [redirect, setRedirect] = useState(false);
  //use effect waits for page renders to be complete
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

  // this will never happen
  if (redirect) {
    return <Redirect to="/"/>;
  }
  return null;
};

export default Logout;