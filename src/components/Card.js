import React from "react";
import { Card as BCard, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Card = ({ title, text }) => {
  const navigation = useNavigate();
  return (
    <div style={{ margin: "5px" }}>
      <BCard>
        <BCard.Body>
          <BCard.Title>{title}</BCard.Title>
          <BCard.Text>{text}</BCard.Text>
        </BCard.Body>
      </BCard>
    </div>
  );
};

export default Card;
