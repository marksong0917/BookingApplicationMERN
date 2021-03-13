import React, { useContext, useState } from 'react';

// Create a contexts for variables and functions
const TokenContext = React.createContext();
const TokenUpdateContext = React.createContext();

// export token, exported context hooks should be Pascal case
export function UseTokenContext() {
  return useContext(TokenContext)
}

// export tokenUpdate function
export function UseTokenUpdateContext() {
  return useContext(TokenUpdateContext)
}

// export the TokenProvider component
export function TokenProvider({ children }) {
  const data = JSON.parse(localStorage.getItem('userData'));
  // set a token state for the whole application
  const [token, setToken] = useState(() =>{
    let token;
    //whenever nav loads, check if there is user data, if there's no user data, token is null and username is null
    if(data)
      {
        token = {
            token: data.token,
            username: data.username
          };
      }
    return token;
  })

  // updating useState reloads the component that it is in. so whenever tokenUpdate is called, nav will reload
  function tokenUpdate(userData) {
    //if no user data, token set to null
    if(userData)
      setToken(userData.token);
    else
      setToken();
  }

  // this prints to console once the TokenProvider loads in
  // console.log("Context token: "+ token);

  // The TokenContext.Provider gives a component that persists the value and functions
  return (
    <TokenContext.Provider value={token}>
      <TokenUpdateContext.Provider value={tokenUpdate}>
      { children }
      </TokenUpdateContext.Provider>
    </TokenContext.Provider>
  );
}
