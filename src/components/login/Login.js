import "./login.css";
import React from "react";
import { Button } from "@material-ui/core";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import axios from "../../axios";

const Login = () => {
  const handleLoginClick = () => {
    // axios
    //   .get("https://wapp-clone-backend.herokuapp.com/auth/google/")
    //   .then((res) => {
    //     console.log(res);
    //   });

    window.open("http://localhost:3001/auth/google", "_self");
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
          <div className="login-button">
            <Button fullWidth onClick={handleLoginClick}>
              Continue with Google
              <ArrowForwardIos className="arrow-forward" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
