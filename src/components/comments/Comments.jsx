import React from "react";
import App from "../../App";
import "./comments.scss";

function Comments({ openComments, toggleComments }) {
  return (
    <div
      className="comments"
      style={{
        transform: openComments ? "translateY(-35rem)" : "translateY(35rem)",
      }}
    >
      <span>Comments</span>
      <button onClick={toggleComments}>Close</button>
    </div>
  );
}

export default Comments;
