import React from "react";
import Header from "./components/Header";
import "./App.css";
import BaseRouter from "./components/BaseRouter";
import authentication from "react-azure-b2c";
import decodeJWT from "jwt-decode";
import Logout from "./components/Logout";

function App() {
  const token = authentication.getAccessToken();
  const decoded = decodeJWT(token.accessToken);
  return (
    <div className="App">
      <Header></Header>
      <BaseRouter></BaseRouter>
    </div>
  );
}

export default App;
