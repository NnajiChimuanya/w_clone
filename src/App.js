import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Main from "./Main";
import "./App.css";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "./axios";
import Login from "./components/login/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    const data = axios.get(
      "https://wapp-clone-backend.herokuapp.com/auth/success",
      { withCredentials: true }
    );
    setUser(data.user);
  }, []);

  const [user, setUser] = useState({ name: "Hello" });

  console.log(user);

  return (
    <Switch>
      <Route exact path="/" component={user ? Main : Login} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
