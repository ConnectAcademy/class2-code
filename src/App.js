import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from "./Home";
import About from "./About";

const App = () => {
  const navigation = useNavigate();

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button onClick={() => navigation(-1)}>Back</button>
      <button
        onClick={() =>
          navigation("/", {
            state: { neshto: "jas sum Mirsat" },
          })
        }
      >
        Home
      </button>
      <button onClick={() => navigation("/about")}>About</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
