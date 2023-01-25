import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  display: block;
  /* width: 100%; */
  padding: 0.5em;
  margin: 0.5em;
  font-size: 0.7em;
  border: 1px solid #ccc;
  border-radius: 0.25em;
  cursor: pointer;
  color: ${(props) =>
    props.buttonTheme === "answerButton" ? "blue" : "black"};
`;

const Button = ({ text, handleClick, theme }) => {
  const handleClickWithPrevent = (e) => {
    e.preventDefault();
    handleClick();
  };
  return (
    <StyledButton
      type="submit"
      onClick={(e) => {
        handleClickWithPrevent(e);
      }}
      buttonTheme={theme}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
