import React, { useState } from "react";
import axios from "axios";

const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3500/query", { question });
      console.log(res);
      //   setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p>{response}</p>
    </form>
  );
};

export default QuestionForm;
