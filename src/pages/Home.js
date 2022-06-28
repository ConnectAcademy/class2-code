import React, { useContext } from "react";
import { Context } from "../Context";

import WithAuth from "../HOC/withAuth";

const Home = () => {
  const { user } = useContext(Context);
  return <div>Hello {user}</div>;
};

export default WithAuth(Home);
