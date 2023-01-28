import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

const QuestionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	margin: 0.5em;
	font-weight: 800;
	background-color: #433c38;
	border-radius: 8px;
`;

const ChoiceWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 8px;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	flex-wrap: wrap;
	margin: 0.5em;
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
					<Button
						key={i}
						text={choice}
						handleClick={checkAnswer}
						theme="answer-btn"
					/>
				))}
			</ChoiceWrapper>
		</>
	);
};

export default Question;
