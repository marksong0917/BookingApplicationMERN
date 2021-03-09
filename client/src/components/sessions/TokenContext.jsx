import React, { useContext, useState } from 'react';

// Create a contexts for variables and functions
const TokenContext = React.createContext();

// Export the contexts for variables and functions using hooks
export function useToken() {
  return useContext(TokenContext)
}

// Exports the TokenProvider component
export function TokenProvider({ children }) {
  const data = JSON.parse(localStorage.getItem('userData'));
  const [token] = useState(data.token)

  // this prints to console once the TokenProvider loads in
  console.log("Your token" + data.username);

  // The TokenContext.Provider gives a component that persists the value and functions
  return (
    <TokenContext.Provider value={token}>
      { children }
    </TokenContext.Provider>
  );
}
