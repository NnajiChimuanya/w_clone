import React from 'react';
import "./sidebarchat.css"
import { Avatar } from '@mui/material';


export default function SidebarChat() {
  return (
      <div className='sidebar-chat'>
          < Avatar />
          <div className='sidebar-chat-info'>
              <h2> Room name</h2>
              <p> This is the message</p>
          </div>
      </div>

  )
}
