import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Logout = () => {

  const [redirect, setRedirect] = useState(false);

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

  if (redirect) return (<Redirect to="/connections"/>);
  return null;
};

export default Logout;