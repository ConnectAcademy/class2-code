import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { state } = useLocation();
  return <div>{state?.neshto}</div>;
};

export default Home;
