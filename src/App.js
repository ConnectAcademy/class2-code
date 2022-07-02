import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPolicy } from "./store/actions";

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={() => dispatch(addPolicy("Jas", 100))}>
        Add policy
      </button>
    </>
  );
};

export default App;
