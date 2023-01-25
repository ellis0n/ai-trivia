import React from "react";
import styled from "styled-components";
const StyledInput = styled.input`
  overflow-x: hidden;
  resize: horizontal;
  display: inline-block;
  /* no extra spaces */
  padding: 0;
  margin: 0;
  white-space: nowrap;
  font-size: calc(10px + 2vmin);
`;
const Input = ({ type, placeholder, setTopic }) => {
  return (
    <StyledInput
      type={type}
      name={type}
      placeholder={placeholder}
      onChange={(e) => {
        e.preventDefault();
        setTopic(e.target.value);
      }}
    />
  );
};

export default Input;
