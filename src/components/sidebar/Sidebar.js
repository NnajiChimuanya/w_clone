import React from "react";
import "./sidebar.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { IconButton, Avatar } from "@mui/material";
import SidebarChat from "./SidebarChat";
import SeearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

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
        <SidebarChat
          name="Ruth"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <SidebarChat
          name="Gift"
          image="https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/w320-h640/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg"
        />
        <SidebarChat
          name="Code Demon"
          image={
            "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
          }
        />
        <SidebarChat
          name={"Haze Monkey"}
          image={
            "https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg"
          }
        />
        <SidebarChat
          name={"Haze King"}
          image={
            "https://pbs.twimg.com/profile_images/1490533817416925189/oDKK6UFj_400x400.jpg"
          }
        />
        <SidebarChat
          name={"Carter"}
          image={
            "https://pbs.twimg.com/profile_images/1521750587615948800/RWovaUht_400x400.jpg"
          }
        />
        <SidebarChat
          name={"Granny"}
          image={
            "https://i2-prod.manchestereveningnews.co.uk/incoming/article23902491.ece/ALTERNATES/s615b/0_EGR090522profile_03.jpg"
          }
        />
        <SidebarChat
          name={"Anon"}
          image={
            "https://bestprofilepictures.com/wp-content/uploads/2021/04/Awesome-Profile-Pic.jpg"
          }
        />
        <SidebarChat
          name={"Kylie"}
          image={
            "https://play-lh.googleusercontent.com/-u-oG-Ni_pco9h7zc3CQl-lFkKJjztO3RGZMjnbaDiznnbXoMQZYUjITHN0BVxYHBg=w240-h480-rw"
          }
        />
        <SidebarChat
          name={"Anime"}
          image={
            "https://www.finetoshine.com/wp-content/uploads/2020/07/Sasha-on-Instagram-%E2%80%9CA-new-autumn-themed-profile-pic-for.jpg"
          }
        />
      </div>
    </div>
  );
}
