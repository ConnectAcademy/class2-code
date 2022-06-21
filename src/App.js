import React, { useState, useEffect } from "react";
import api from "./api";

import nekojaData from "./Data.json";
import Card from "./Card";

const App = () => {
  const [posts, setPosts] = useState(null);
  console.log(posts);

  useEffect(() => {
    api.get("/posts").then((res) => setPosts(res.data));
  }, []);

  const postToFake = () => {
    const data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    api
      .put("/posts", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={postToFake}>Post to fake server</button>
      {posts?.map((post) => (
        <Card key={post.id} postTitle={post.title} postBody={post.body} />
      ))}
    </>
  );
};

export default App;
