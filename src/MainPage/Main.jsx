import React from "react";
import Home from "./Home";
import Login from "./Login";

function Main({ isloggedin, login }) {
  return <div>{isloggedin ? <Home /> : <Login login={login} />}</div>;
}

export default Main;
