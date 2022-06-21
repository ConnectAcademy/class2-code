import React from "react";

const Form = ({ userName, surName, onUsernameChange, onSurnameChange }) => {
  return (
    <>
      <input placeholder="Name" value={userName} onChange={onUsernameChange} />
      <input placeholder="surname" value={surName} onChange={onSurnameChange} />
    </>
  );
};

export default Form;
