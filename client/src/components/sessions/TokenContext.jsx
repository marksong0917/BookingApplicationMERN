import { set } from 'mongoose';
import React, { useContext, useState } from 'react'

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
  const [token, setToken] = useState("No Token")

  //sample to show how context works, but here would be JWT logic
  function updateToken(){
    if (token === "No Token")
      setToken("Updated");
    else
      setToken("No Token");
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
