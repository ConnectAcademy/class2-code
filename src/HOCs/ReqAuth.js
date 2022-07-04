import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ReqAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    const user = useSelector((state) => state.user);
    const navigation = useNavigate();
    useEffect(() => {
      if (!user) {
        navigation("/login");
      }
    }, []);
    return <ChildComponent {...props} />;
  };
  return ComposedComponent;
};

export default ReqAuth;
