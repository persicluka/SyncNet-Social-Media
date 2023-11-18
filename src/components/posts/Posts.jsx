import React from "react";
import Post from "../post/Post";
import "./posts.scss";
const posts = [
  {
    id: 1,
    userId: 1,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1694316874160-76d3603d8cdf?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    userId: 2,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1700167917956-b6ec1402f2a9?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    userId: 3,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1700235120867-3517dbe5dd52?q=80&w=3844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    userId: 4,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Posts() {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
