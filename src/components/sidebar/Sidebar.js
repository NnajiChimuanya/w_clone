import React from "react";
import "./sidebar.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { IconButton, Avatar } from "@mui/material";
import SidebarChat from "./SidebarChat";
import SeearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { sidebarChatData } from "./sidebarChatData.js";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg" />

        <div className="sidebar-header-right">
          <DonutLargeIcon />

          <ChatIcon />

          <MoreVertIcon />
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-container">
          <SeearchIcon />
          <input placeholder="search or start new chat" type="text"></input>
        </div>
        <FilterListIcon />
      </div>

      <div className="sidebar-chats">
        {sidebarChatData?.map((user, id) => {
          const { name, image } = user;
          return <SidebarChat key={id} name={name} image={image} />;
        })}
      </div>
    </div>
  );
}
