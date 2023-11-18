import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./post.scss";

function Post({ post }) {
  return (
    <div className="post">
      <div className="header">
        <div className="user-info">
          <img src={post.image} alt="" />
          <span>{post.name}</span>
        </div>
        <MoreHorizIcon style={{ cursor: "pointer", height: "2rem" }} />
      </div>
      <div className="content">
        <img src={post.image} alt="" />
      </div>
      <div
        className="interactions
      "
      ></div>
    </div>
  );
}

export default Post;
