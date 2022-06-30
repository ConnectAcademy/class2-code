import React, { useEffect, useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";

const WithAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    const { isLoggedIn } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedIn) {
        navigate("/login");
      }
    }, [isLoggedIn]);

    return <ChildComponent {...props} />;
  };
  return ComposedComponent;
};

export default WithAuth;
