import { set } from 'mongoose';
import React, { useContext, useState } from 'react';

// Create a contexts for variables and functions
const TokenContext = React.createContext();
const TokenUpdateContext = React.createContext();

// Export the contexts for variables and functions using hooks, exported context hooks should be Pascal case
export function UseTokenContext() {
  return useContext(TokenContext)
}

export function UpdateTokenContext() {
  return useContext(TokenUpdateContext)
}

// Exports the TokenProvider component
export function TokenProvider({ children }) {
  const data = JSON.parse(localStorage.getItem('userData'));

  // creates a token that is set by default or
  const [token, setToken] = useState(() =>{
    let token = "no token";
    
    //if user cookie data
    if(data)
      //place user cookie data in
      token = data.token;
    return token;
  })

  function updateToken() {
    setToken(data.token);
  }

  // this prints to console once the TokenProvider loads in
  console.log("Your token: "+ token);

  // The TokenContext.Provider gives a component that persists the value and functions
  return (
    <TokenContext.Provider value={token}>
      <TokenUpdateContext.Provider value={updateToken}>
      { children }
      </TokenUpdateContext.Provider>
    </TokenContext.Provider>
  );
}
