import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "./post.scss";
import { Link } from "react-router-dom";

function Post({ post, toggleComments }) {
  return (
    <div className="post">
      <div className="header">
        <Link
          to={"/profile/:id"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="user-info">
            <img src={post.image} alt="" />
            <span>{post.name}</span>
          </div>
        </Link>
        <MoreHorizIcon
          style={{ cursor: "pointer", height: "2rem", fontSize: "2rem" }}
        />
      </div>

      <div className="content">
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          blanditiis?
        </div>
        <img src={post.image} alt="" />
      </div>

      <div className="activity">
        <div className="like-share">
          <div className="activity-info">
            <FavoriteBorderIcon className="activity-icon" />
            <span>111k</span>
          </div>

          <div className="activity-info">
            <TextsmsOutlinedIcon
              className="activity-icon"
              onClick={toggleComments}
            />
            <span>12k</span>
          </div>
        </div>
        <ShareOutlinedIcon className="activity-icon" />
      </div>
    </div>
  );
}

export default Post;
