import React, { useEffect, useState } from "react";
import Question from "./Question";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";

const TriviaWrapper = () => {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const data = [
    "Politics",
    "Sports",
    "Entertainment",
    "Business",
    "Technology",
    "Science",
    "Health",
  ];

  const getTopic = async () => {
    try {
      const res = await axios.post("http://localhost:3500/query", {
        topic,
      });
      setQuestion(res.data.response);
      setShowQuestion(true);
      setShowForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (selected) => {
    setTopic(selected);
  };

  return (
    <>
      {showForm ? (
        <>
          <form className="topic-form">
            <label htmlFor="topic">Pick a topic</label>
            <Select handleSelect={handleSelect} data={data} name="trivia" />
            <Input
              type="text"
              placeholder="Type your own.."
              setTopic={setTopic}
            />
            <Button
              className="submit-btn"
              handleClick={getTopic}
              text="Get question"
            />
          </form>
        </>
      ) : // <Form handleClick={getTopic} data={data} label={"Pick a topic"} />
      null}

      {showQuestion ? (
        <>
          <Question question={question} />
        </>
      ) : null}
    </>
  );
};

export default TriviaWrapper;
