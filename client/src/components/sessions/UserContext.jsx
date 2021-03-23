import React, { useContext, useState } from 'react';

// Create a contexts for variables and functions
const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

// export token, exported context hooks should be Pascal case
export function UseUserContext() {
  return useContext(UserContext)
}

// export tokenUpdate function
export function UseUserUpdateContext() {
  return useContext(UserUpdateContext)
}

// export the TokenProvider component
export function TokenProvider({ children }) {
  const dataStore = JSON.parse(localStorage.getItem('userData'));
  // set a token state for the whole application
  const [user, setUser] = useState(() =>{
    let inData;
    //whenever nav loads, check if there is user data, if there's no user data, token is null and username is null
    if(dataStore)
      inData = dataStore;
    else
      inData = null;
    return inData;
  })

  // updating useState reloads the component that it is in. so whenever tokenUpdate is called, nav will reload
  function userUpdate(userData) {
    //if no user data, token set to null
    if(userData)
      setUser(userData);
    else
      setUser(null);
  }

  // this prints to console once the TokenProvider loads in
  // console.log("Context token: "+ token);

  // The TokenContext.Provider gives a component that persists the value and functions
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={userUpdate}>
      { children }
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
