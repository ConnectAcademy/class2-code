import { render } from "@testing-library/react";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [savedEntries, setSavedEntries] = useState([]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setSavedEntries((prev) => [...prev, count])}>
        Save
      </button>
      {savedEntries.length >= 1 && (
        <ul>
          {savedEntries.map((elem) => (
            <li>{elem}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
