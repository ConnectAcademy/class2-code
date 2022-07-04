import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item onClick={() => navigation("/")}>
        <Nav.Link eventKey="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={() => navigation("/login")}>
        <Nav.Link eventKey="/login">Log In</Nav.Link>
      </Nav.Item>
      <Nav.Item></Nav.Item>
    </Nav>
  );
};

export default Header;
