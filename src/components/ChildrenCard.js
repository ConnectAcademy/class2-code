import React from "react";

const ChildrenCard = ({ title, text, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="inputs">{children}</div>
    </div>
  );
};

export default ChildrenCard;
