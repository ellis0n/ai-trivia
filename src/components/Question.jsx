import React, { useState, useEffect } from "react";
import Answer from "./Answer";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  margin: 0.5em;
  font-weight: 800;
  background-color: #6b0f1a;
  border-radius: 8px;
`;

const ChoiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 8px;
  align-items: center;
  /* justify-content: center; */
  font-size: calc(10px + 2vmin);
  flex-wrap: wrap;
  padding: 0 6%;
`;

const Question = ({ question }) => {
  const [answer, setAnswer] = useState("");
  const [order, setOrder] = useState([]);
  const [confirm, setConfirm] = useState(false);
  let data = JSON.parse(question);

  const array = [data.a, data.w1, data.w2, data.w3];

  useEffect(() => {
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    setOrder(shuffle(array));
  }, []);

  const checkAnswer = (e) => {
    confirmChoice();
    setAnswer(e.target.innerText);
    if (answer === data.a) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  };

  const confirmChoice = () => {
    console.log("confirm");
  };

  return (
    <>
      <QuestionWrapper>
        <h1>{data.q}</h1>
      </QuestionWrapper>
      <ChoiceWrapper>
        {order.map((choice, i) => (
          <>
            <Answer key={i} data={choice} confirm={checkAnswer} />
            {/* <div>
							<button onClick={checkAnswer}>{choice}</button>
						</div> */}
          </>
        ))}
      </ChoiceWrapper>
    </>
  );
};

export default Question;
