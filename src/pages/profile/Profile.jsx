import React, { useContext } from "react";

import "./profile.scss";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="images">
        <img src={currentUser.image} alt="" />
        <img src={currentUser.image} alt="" className="profilePic" />
      </div>
      <div className="profile">
        <div className="userInfo">
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
