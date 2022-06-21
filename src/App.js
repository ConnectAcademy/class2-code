import React, { useState } from "react";

import Form from "./Form";
import Info from "./Info";

const App = () => {
  const [userName, setUserName] = useState("");
  const [surName, setSurName] = useState("");
  return (
    <>
      <h3>Enter your name: </h3>
      <Form
        userName={userName}
        surName={surName}
        onUsernameChange={(e) => setUserName(e.target.value)}
        onSurnameChange={(e) => setSurName(e.target.value)}
      />
      <Info value={userName} childrenValue={surName} />
    </>
  );
};

export default App;
