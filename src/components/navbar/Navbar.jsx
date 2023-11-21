import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import "./navbar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const { toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>SyncMe.</span>
        </Link>
        <Link
          to={"/"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HomeOutlinedIcon className="icon" />
        </Link>
        <DarkModeOutlinedIcon className="icon" onClick={toggleDarkMode} />
        <GridViewOutlinedIcon className="icon" />

        <div className="search">
          <SearchOutlinedIcon className="icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        <Person2OutlinedIcon className="icon" />
        <EmailOutlinedIcon className="icon" />
        <NotificationsNoneOutlinedIcon className="icon" />
        <img className="user-image" src={currentUser.image} alt="" />
        <span>{currentUser.name}</span>
      </div>
    </div>
  );
}

export default Navbar;
