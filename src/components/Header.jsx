import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin: 0.5em;
  font-weight: 800;
  background-color: #6b0f1a;
  border-radius: 8px;
`;

const Header = () => {
  return <Wrapper>AI Trivia</Wrapper>;
};

export default Header;
