import React, { useEffect, useState } from "react";
import Select from "./Select";
import Question from "./Question";
import axios from "axios";

const Wrapper = () => {
  const [question, setQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [showSelect, setShowSelect] = useState(true);

  const values = [
    "politics",
    "sports",
    "entertainment",
    "business",
    "technology",
    "science",
    "health",
  ];

  const getTopic = async (topic) => {
    console.log(topic);

    try {
      const res = await axios.post("http://localhost:3500/query", {
        topic,
      });
      setQuestion(res.data.response);
      setShowQuestion(true);
      setShowSelect(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {showSelect ? (
        <Select
          onSelect={getTopic}
          values={values}
          id="topic"
          btn_text="Get Question"
        />
      ) : null}

      {showQuestion ? (
        <div>
          <Question question={question} />
        </div>
      ) : null}
    </>
  );
};

export default Wrapper;
