import React from "react";

const Answer = ({ data, confirm }) => {
  return (
    <div className="answer-wrapper" onClick={confirm}>
      <p className="answer">{data}</p>
    </div>
  );
};

export default Answer;
