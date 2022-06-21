import React from "react";

const Card = ({ postTitle, postBody }) => {
  return (
    <>
      <h3>{postTitle}</h3>
      <p>{postBody}</p>
      <hr />
    </>
  );
};

export default Card;
