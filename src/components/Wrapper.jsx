import React, { useEffect, useState } from "react";
import Question from "./Question";
import Form from "./Form";
import axios from "axios";

const Wrapper = () => {
	const [topic, setTopic] = useState("");
	const [question, setQuestion] = useState("");
	const [showQuestion, setShowQuestion] = useState(false);
	const [showForm, setShowForm] = useState(true);

	const getTopic = async (topic) => {
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

	return (
		<>
			{showForm ? <Form getTopic={getTopic} /> : null}

			{showQuestion ? (
				<>
					<Question question={question} />
				</>
			) : null}
		</>
	);
};

export default Wrapper;
