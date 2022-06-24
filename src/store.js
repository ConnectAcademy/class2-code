import React, { createContext, useState } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const setUser = (user) => {
    setLoggedUser(user);
  };
  return (
    <Context.Provider
      value={{
        loggedUser,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
