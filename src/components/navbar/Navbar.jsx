import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>SyncNet.</span>
        </Link>
        <HomeOutlinedIcon className="icon" />
        <DarkModeOutlinedIcon className="icon" />
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
        <img
          className="user-image"
          src="https://images.unsplash.com/photo-1699904307740-79cf7c14ced0?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span>John Doe</span>
      </div>
    </div>
  );
}

export default Navbar;
