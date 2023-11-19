import React from "react";
import App from "../../App";
import "./comments.scss";

function Comments({ isClicked }) {
  if (isClicked) {
    <App commentsOpened={isClicked} />;
  }
  return (
    <div
      className="comments"
      style={{
        transform: isClicked ? "translateY(35rem)" : "translateY(-35rem)",
      }}
    >
      Comments
    </div>
  );
}

export default Comments;
