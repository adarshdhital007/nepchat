import { auth } from "../firebase-config.js";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import Cookies from "universal-cookie";
import "../styles/AppWrapper.css";

const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  const handleBackToRoomCreation = () => {
    setIsInChat(false);
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>Realtime Chat using Firebase</h1>
      </div>

      <div className="app-container">{children}</div>

      {isAuth && (
        <div className="button-container">
         
          <button className="sign-out-button" onClick={signUserOut}>
            Sign Out
          </button>
          <button className="back-button" onClick={handleBackToRoomCreation}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};
