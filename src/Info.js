import React from "react";

import InfoChild from "./InfoChild";

const Info = ({ value, childrenValue }) => {
  return (
    <>
      <h1>Your name is: {value}</h1>
      <InfoChild value={childrenValue} />
    </>
  );
};

export default Info;
