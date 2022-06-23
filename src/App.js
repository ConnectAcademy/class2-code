import React, { useEffect, useState } from "react";
import jsonServer from "./api";

import Comment from "./Comment";

const App = () => {
  const [comments, setComments] = useState(null);
  const [comment, setComment] = useState(null);
  const [postId, setPostId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (postId && postId > 0 && postId <= 100) {
      setIsLoading(true);
      jsonServer
        .get(`/comments?postId=${postId}`)
        .then((res) => {
          setIsLoading(false);
          setComments(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }
  }, [postId]);

  const addComment = (e) => {
    e.preventDefault();
    setComments((prev) => [...prev, comment]);
  };

  return (
    <div className="ui comments">
      <div className={isLoading ? "ui icon input loading" : "ui input"}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setPostId(e.target.value)}
        />
        {isLoading && <i className="search icon"></i>}
      </div>
      {comments?.map((comment) => (
        <Comment email={comment.email} comment={comment.body} />
      ))}
      <form className="ui reply form" onSubmit={(e) => addComment(e)}>
        <div className="field">
          <textarea
            defaultValue={""}
            onChange={(e) =>
              setComment({
                body: e.target.value,
                name: "Neshto random",
                id: 101,
                postId: postId,
                email: "example@example.com",
              })
            }
          />
        </div>
        <div className="ui blue labeled submit icon button">
          <input className="icon edit" type="submit" /> Add Reply
        </div>
      </form>
    </div>
  );
};

export default App;
