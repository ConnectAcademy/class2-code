import React, { useContext } from "react";

import { Context } from "./store";
import User from "./User";

const App = () => {
  const { loggedUser, setUser } = useContext(Context);
  console.log(loggedUser);
  return (
    <>
      <h1>Hello World!</h1>
      <User />
      <button
        onClick={() =>
          setUser({ userName: "uname", email: "example@exmple.com" })
        }
      >
        Log me in
      </button>
    </>
  );
};

export default App;
