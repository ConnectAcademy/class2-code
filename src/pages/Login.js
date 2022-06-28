import React, { useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLoggedIn, authUser, user } = useContext(Context);
  const navigation = useNavigate();
  console.log(isLoggedIn, user);
  const handleSubmit = (e) => {
    e.preventDefault();
    authUser(e.target.email.value);
    navigation("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter your email" name="email" />
      <button>Log In</button>
    </form>
  );
};

export default Login;
