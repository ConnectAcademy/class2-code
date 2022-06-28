import React, { createContext, useState } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const authUser = (user) => {
    setIsLoggedIn((prev) => !prev);
    setUser(user);
  };
  return (
    <Context.Provider
      value={{
        isLoggedIn,
        authUser,
        user,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
