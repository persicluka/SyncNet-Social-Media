import React from "react";
import "./rightBar.scss";

function RightBar() {
  const imageLink =
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="rightBar">
      <div className="container">
        <div className="menu-top">
          <span>Suggestions</span>
          <div className="item">
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <button>Follow</button>
          </div>
          <div className="item">
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <button>Follow</button>
          </div>
        </div>

        <div className="menu-bottom">
          <div className="title-container">
            <span>Active users</span>
          </div>
          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>

          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>

          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>

          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>

          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>

          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>

          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>

          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>

          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>

          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>

          <div className="item">
            <div className="acitve-icon"></div>
            <div className="user">
              <img src={imageLink} />
              <span>Jane Doe</span>
            </div>
            <span>Active now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
