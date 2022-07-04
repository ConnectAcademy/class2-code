import React, { useEffect, useState } from "react";
import axios from "axios";
import { Stack, Container } from "react-bootstrap";

import ReqAuth from "../../HOCs/ReqAuth";
import Card from "../../components/Card";

const Home = () => {
  const [posts, setPosts] = useState(null);
  console.log(posts);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);
  return (
    <div>
      <Container>
        {posts?.map((post) => (
          <Card title={post.title} text={post.body} />
        ))}
      </Container>
    </div>
  );
};

export default ReqAuth(Home);
