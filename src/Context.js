import React, { createContext, useState } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authUser = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <Context.Provider
      value={{
        isLoggedIn,
        authUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
