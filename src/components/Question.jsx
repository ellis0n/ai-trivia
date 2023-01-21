import React from "react";

const Question = ({ question }) => {
  let data = JSON.parse(question);

  return (
    <div>
      <h1>{data.q}</h1>
      <h2>{data.a}</h2>
    </div>
  );
};

export default Question;
