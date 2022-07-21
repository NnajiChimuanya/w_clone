import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import "./App.css";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "./axios";
import Login from "./components/login/Login";

function App() {
  const [messages, setMessages] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

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
    <div>
      {!loggedIn ? (
        <Login />
      ) : (
        <div className="app">
          <div className="app-body">
            <Sidebar />
            <Chat messages={messages} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
