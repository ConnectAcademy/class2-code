import React from "react";

const Card = ({ image, header, text }) => {
  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + image} height={100} width={100} />
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
