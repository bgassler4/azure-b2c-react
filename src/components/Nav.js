import React from "react";
import NavStyles from "./styles/NavStyles";
import Logout from "../components/Logout";

const Nav = () => {
  return (
    <NavStyles>
      <div>
        <a href="/employees">Employees</a>
      </div>
      <div>
        <a href="/counter">Counter</a>
      </div>
      <div>
        <Logout></Logout>
      </div>
    </NavStyles>
  );
};

export default Nav;
