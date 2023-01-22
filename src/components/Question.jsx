import React, { useState, useEffect } from "react";
import Answer from "./Answer";

const Question = ({ question }) => {
  const [answer, setAnswer] = useState("");
  const [order, setOrder] = useState([]);
  const [confirm, setConfirm] = useState(false);
  let data = JSON.parse(question);

  const array = [data.a, data.w1, data.w2];

  useEffect(() => {
    const shuffleCards = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    setOrder(shuffleCards(array));
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
      <div className="question-wrapper">
        <h1>{data.q}</h1>
      </div>
      <div className="choice-wrapper">
        {order.map((choice) => (
          <Answer data={choice} confirm={checkAnswer} />
        ))}
      </div>
    </>
  );
};

export default Question;
