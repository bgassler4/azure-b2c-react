import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

//you can style items like this or like normal in css files
//or define styled components like this in separate files and
//import them if you want to use them in multiple places
const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid black;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: lightsteelblue;
  a {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <a href="/">Loyalty App</a>
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
