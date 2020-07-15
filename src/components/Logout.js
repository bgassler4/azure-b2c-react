import React from "react";
import authentication from "react-azure-b2c";

const auth = authentication;

const Logout = () => {
  const logout = () => {
    auth.signOut();
  };
  return <button onClick={logout}>Log Out</button>;
};

export default Logout;
