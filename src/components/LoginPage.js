import React from "react";
import { startLogin } from "../actions/auth";

export default () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">React App</h1>
      <p>Tagline for application</p>
      <button className="button" onClick={startLogin()}>
        Login with Google
      </button>
    </div>
  </div>
);
