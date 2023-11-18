import React from "react";
import "./stories.scss";

function Stories() {
  const stories = [
    {
      id: 2,
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1694316874160-76d3603d8cdf?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1700167917956-b6ec1402f2a9?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1700235120867-3517dbe5dd52?q=80&w=3844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img
          src="https://images.unsplash.com/photo-1699904307740-79cf7c14ced0?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
          alt=""
        />
        <span>Jane Doe</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.image} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
