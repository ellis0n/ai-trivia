import React from "react";
import styled from "styled-components";
import AnswerButton from "./Button";

const ChoiceCtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;
  font-size: calc(10px + 2vmin);
  /* margin: 0.5em; */
  border: 2px solid #f7f0f518;
  border-radius: 8px;
  background-color: #313e50;
  cursor: pointer;
`;

const Answer = ({ data, confirm }) => {
  return (
    <ChoiceCtn onClick={confirm}>
      <AnswerButton text={data} theme={"answerButton"}></AnswerButton>
    </ChoiceCtn>
  );
};

export default Answer;
