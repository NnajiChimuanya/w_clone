import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "./axios";

const Main = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("https://wapp-clone-backend.herokuapp.com/api/message/sync")
      .then((response) => {
        setMessages(response.data);
      });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("e58aa4d80ab07df06992", {
      cluster: "eu",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unsubscribe();
      channel.unbind_all();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
};

export default Main;
