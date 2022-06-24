import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUser } from "../services/usersService";

const User = () => {
  const [user, setUser] = useState(null);
  const [isLoadin, setIsLoadin] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setIsLoadin(true);
    getUser(id)
      .then((res) => {
        console.log(res);
        setIsLoadin(false);
        setUser(res);
      })
      .catch((err) => {
        setIsLoadin(false);
        console.log(err);
      });
  }, [id]);
  //   const { state } = useLocation();
  console.log(user);
  return (
    <div>
      {/* <h1>ID: {state.id}</h1>
      <h1>Name: {state.name}</h1>
      <h1>Email: {state.email}</h1>
      <h1>Bio: {state.bio}</h1>
      <h1>Phone: {state.phone}</h1> */}
      <h1>{isLoadin && "Loading..."}</h1>
      <h1>ID: {user?.id}</h1>
      <h1>Name: {user?.name}</h1>
      <h1>Email: {user?.email}</h1>
      <h1>Bio: {user?.bio}</h1>
      <h1>Phone: {user?.phone}</h1>
    </div>
  );
};

export default User;
