import React from "react";
import styled from "styled-components";

const StyledHome = styled.div`
  h2 {
    margin: 30px;
  }
`;

const Home = (props) => {
  return (
    <StyledHome>
      <h2>Welcome to the Home Page!</h2>
    </StyledHome>
  );
};

export default Home;
