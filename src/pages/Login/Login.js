import React from "react";
import { Stack, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authUser } from "../../store/actions";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e?.target?.email?.value) {
      dispatch(authUser(e?.target?.email?.value));
      navigation("/");
    } else {
      alert("Please enter an username to sign in");
    }
  };
  return (
    <div
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "10px",
        padding: "15%",
        margin: "10%",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="email">Log In</Form.Label>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            name="email"
            placeholder="Enter your email here..."
          />
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Stack>
      </Form>
    </div>
  );
};

export default Login;
