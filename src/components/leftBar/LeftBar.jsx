import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ForumIcon from "@mui/icons-material/Forum";
import HdIcon from "@mui/icons-material/Hd";

import "./leftBar.scss";
function LeftBar() {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          {/* <div className="user">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg"
              alt=""
            />
            <span>lukapersic</span>
          </div> */}

          <div className="item">
            <GroupIcon className="icon" />
            <span>Friends</span>
          </div>

          <div className="item">
            <ForumIcon className="icon" />
            <span>Messages</span>
            <div className="notification">3</div>
          </div>
          <div className="item">
            <VideogameAssetIcon className="icon" />
            <span>New Games</span>
          </div>

          <div className="item">
            <HdIcon className="icon" />
            <span>Popular Movies</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default LeftBar;
