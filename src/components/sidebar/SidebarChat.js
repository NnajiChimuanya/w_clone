import React from "react";
import "./sidebarchat.css";
import { Avatar } from "@mui/material";

export default function SidebarChat({ name, image, lastMessage }) {
  return (
    <div className="sidebar-chat">
      <Avatar src={image} />
      <div className="sidebar-chat-info">
        <h2> {name}</h2>
        <p> This is the last message</p>
      </div>
    </div>
  );
}
