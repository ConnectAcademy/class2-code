import React from "react";

const Comment = ({ email, comment }) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src="https://semantic-ui.com/images/avatar/small/elliot.jpg" />
      </a>
      <div className="content">
        <a className="author">{email}</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">{comment}</div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default Comment;
