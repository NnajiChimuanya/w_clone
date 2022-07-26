import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Main from "./Main";
import "./App.css";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "./axios";
import Login from "./components/login/Login";
import { Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let data = {
      name: Cookie.get("user name"),
      image: Cookie.get("user image"),
    };
    setUser(data);
  }, []);

  console.log(user);

  return (
    <Switch>
      <Route exact path="/" component={user ? Main : Login} />
      <Route path="/login" component={!user ? Login : Main} />
    </Switch>
  );
}

export default App;
