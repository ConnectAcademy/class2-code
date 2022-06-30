import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../Context";

import "./Header.css";

const Header = () => {
  const { isLoggedIn, logOutUser } = useContext(Context);

  return (
    <div className="header">
      <div>
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/profile" className="links">
          Profile
        </Link>
      </div>
      <Link to="/login" className="links right-link" onClick={logOutUser}>
        {isLoggedIn ? "Logout" : "Login"}
      </Link>
    </div>
  );
};

export default Header;
