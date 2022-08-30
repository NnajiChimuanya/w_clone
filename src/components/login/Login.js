import "./login.css";
import React from "react";
import { Button } from "@material-ui/core";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import axios from "../../axios";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  };

  const handleLoginClick = () => {
    axios
      .get("http://localhost:3001/auth/google", {
        mode: "cors",
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="header">
        <div className="header-logo">
          <img className="logo" src="whatsapp.png" alt="whatsapp logo" />
        </div>

        <div className="header-name">
          <p>WHATSAPP WEB</p>
        </div>
      </div>

      <div className="login-details">
        <div className="login-steps">
          <div className="login-steps-head">
            To use WhatsApp on your computer:
          </div>
          <div className="login-steps-steps">
            <ol>
              <li>Open WhatApp on your computer.</li>
              <li>Have a gmail account.</li>
              <li>Tap on the "Continue with Google" button</li>
            </ol>
          </div>
          <div className="google-login-container">
            <GoogleLogin className="google-button">
              <p className="google-text">Login with Google</p>
            </GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
