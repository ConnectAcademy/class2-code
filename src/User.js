import React, { useContext } from "react";
import { Context } from "./store";

const User = () => {
  const { loggedUser } = useContext(Context);
  return (
    <div>
      {loggedUser
        ? loggedUser.userName + loggedUser.email
        : "User is not logged in"}
    </div>
  );
};

export default User;
