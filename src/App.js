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
  const fetchData = async () => {
    const data = await axios.get(
      `${process.env.REACT_APP_base_url}/auth/success`,
      {
        withCredentials: true,
      }
    );
    setUser(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [user, setUser] = useState({});

  console.log(user);

  return (
    <Switch>
      <Route exact path="/" component={user ? Main : Login} />
      <Route path="/login" component={!user ? Login : Main} />
    </Switch>
  );
}

export default App;
