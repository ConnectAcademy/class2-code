import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, email, bio, phone, id }) => {
  const navigation = useNavigate();
  return (
    <div className="ui card">
      <div className="image">
        <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
      </div>
      <div className="content">
        <a
          className="header"
          onClick={() =>
            navigation(`/${id}`, {
              state: {
                name,
                email,
                bio,
                phone,
                id,
              },
            })
          }
        >
          {name}
        </a>
        <div className="meta">
          <span className="date">{email}</span>
        </div>
        <div className="description">{bio}</div>
      </div>
      <div className="extra content">
        <a>
          <i className="phone icon" />
          {phone}
        </a>
      </div>
    </div>
  );
};

export default Card;
