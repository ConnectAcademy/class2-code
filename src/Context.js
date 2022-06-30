import React, { createContext, useState } from "react";

export const Context = createContext({
  isLoggedIn: false,
  authUser: () => {},
  user: null,
  logOutUser: () => {},
  setUserInfo: () => {},
});

const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const authUser = (user) => {
    setIsLoggedIn(true);
    setUser(user);
  };

  const logOutUser = (user) => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const setUserInfo = (user) => {
    setUser(user);
  };

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        authUser,
        user,
        logOutUser,
        setUserInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
