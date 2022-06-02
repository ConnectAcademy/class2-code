import React from "react";
import Footer from "./Footer";

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
      <Footer />
    </>
  );
};

export default Header;
