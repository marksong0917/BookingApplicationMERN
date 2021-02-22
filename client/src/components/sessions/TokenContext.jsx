import { set } from 'mongoose'; // for some reason the app crashes without this import
import React, { useContext, useState } from 'react';

// Create a contexts for variables and functions
const TokenContext = React.createContext();
const TokenUpdateContext = React.createContext();

// Export the contexts for variables and functions using hooks
export function useToken() {
  return useContext(TokenContext)
}
export function useTokenUpdate() {
  return useContext(TokenUpdateContext)
}

// Exports the TokenProvider component
export function TokenProvider({ children }) {
  const data = JSON.parse(localStorage.getItem('userData'));
  const [token, setToken] = useState(data.token)

  //sample to show how context works, but here would be JWT logic maybe?? I don't think it's needed
  function updateToken(){
    //this stuff is called when home button is clicked in Nav.jsx but it's not exactly right just yet
    console.log("local storage token: " + data.token)
    setToken(JSON.stringify(data.token))
    console.log("token context: " + token);
  }

  // The TokenContext.Provider gives a component that persists the value and function
  return (
    <TokenContext.Provider value={token}>
      <TokenUpdateContext.Provider value={updateToken}>
      { children }
      </TokenUpdateContext.Provider>
    </TokenContext.Provider>
  );
}
