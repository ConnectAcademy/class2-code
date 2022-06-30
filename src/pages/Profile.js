import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

import WithAuth from "../HOC/withAuth";

const Profile = () => {
  const { user } = useContext(Context);

  return (
    <div>
      {typeof user !== "object" && (
        <Link to="/">Please enter detailed information about your self</Link>
      )}
      {typeof user === "object" && (
        <>
          <h3>Name: {user?.name}</h3>
          <h3>Surname: {user?.surname}</h3>
          <h3>Age: {user?.age}</h3>
        </>
      )}
    </div>
  );
};

export default WithAuth(Profile);
