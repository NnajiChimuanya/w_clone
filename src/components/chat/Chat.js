import React from "react";
import "./chat.css";
import SeearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Avatar, Icon } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import MicIcon from "@mui/icons-material/Mic";
import AttachFileIcon from "@mui/icons-material/AttachFileTwoTone";
import { useState } from "react";
import axios from "../../axios";
// import Picker from 'emoji-picker-react';

export default function Chat({ messages }) {
  const [input, setInput] = useState("");
  // const [chosenEmoji, setChosenEmoji] = useState(null);

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post(
      "https://wapp-clone-backend.herokuapp.com/api/message/new",
      {
        message: input,
        name: "Me",
        timestamp: new Date().toDateString(),
        recieved: false,
      }
    );

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />

        <div className="chat-header-info">
          <h3> Room namee</h3>
          <p> Last seen 12:34pm</p>
        </div>

        <div className="chat-header-right">
          <SeearchIcon />

          <MoreVertIcon />
        </div>
      </div>

      <div className="chat-body">
        {messages.map((item, index) => {
          const { id, message, name, timestamp, recieved } = item;

          return (
            <p
              key={index}
              className={`${recieved} ? chat-message chat-reciever : chat-message `}
            >
              <span className="chat-name"> {name} </span>

              {message}

              <span id="chat-timestamp">{timestamp}</span>
            </p>
          );
        })}
      </div>

      <div className="chat-footer">
        <MoodIcon />

        {/* {chosenEmoji ? (
          <span>You chose: {chosenEmoji.emoji}</span>
        ) : (
          <span>No emoji Chosen</span>
        )}

        <Picker onEmojiClick={onEmojiClick}  pickerStyle={{ width: '100%' }}/> */}

        <AttachFileIcon className="attach-file-icon" />

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            {" "}
            Send Message
          </button>
        </form>

        <MicIcon />
      </div>
    </div>
  );
}
