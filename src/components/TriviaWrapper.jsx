import React, { useEffect, useState } from "react";
import Question from "./Question";
// import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import styled from "styled-components";

const QuizForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	width: auto;
	margin: 0 12.5%;
	padding: 1em;
	background-color: #433c38;
	border-radius: 8px;
	select {
		text-align: center;
		width: auto;
		padding: 0.5em;
		margin: 1em;
		font-size: 1em;
		border: 1px solid #ccc;
		border-radius: 0.25em;
		/* box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	-webkit-appearance: none;
	-moz-appearance: none; */
		/* appearance: none; */
	}
	label {
		color: white;
		font-size: calc(10px + 2vmin);
		font-family: Arial, Helvetica, sans-serif;
		font-weight: 600;
		margin: 0;
		padding: 0;
	}
`;
const TriviaWrapper = () => {
	const [topic, setTopic] = useState("");
	const [question, setQuestion] = useState("");
	const [showQuestion, setShowQuestion] = useState(false);
	const [showForm, setShowForm] = useState(true);
	const [score, setScore] = useState(0);

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

	const scoreHandler = (bool) => {
		if (bool) setScore(score + 1);
	};

	return (
		<>
			{showForm ? (
				<>
					<QuizForm>
						<label htmlFor="topic">Topic:</label>
						{/* <Select handleSelect={handleSelect} data={data} name="trivia" /> */}
						<Input type="text" placeholder="Type here..." setTopic={setTopic} />
						<Button
							handleClick={getTopic}
							text="Get question"
							theme={"form-btn"}
						/>
					</QuizForm>
				</>
			) : // <Form handleClick={getTopic} data={data} label={"Pick a topic"} />
			null}

			{showQuestion ? (
				<>
					<Question
						question={question}
						scoreHandler={scoreHandler}
						score={score}
						getTopic={getTopic}
					/>
				</>
			) : null}
		</>
	);
};

export default TriviaWrapper;
