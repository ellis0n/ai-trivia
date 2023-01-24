import React, { useState } from "react";
import Select from "./Select";
import Text from "./Text";
import Button from "./Button";

const Form = ({ getTopic }) => {
	const [topic, setTopic] = useState("");
	console.log(topic);

	const topics = [
		"politics",
		"sports",
		"entertainment",
		"business",
		"technology",
		"science",
		"health",
	];

	const handleSelect = (e) => {
		setTopic(e.target.value);
	};

	const handleSubmit = async (event) => {
		console.log(topic);
		event.preventDefault();
		getTopic(topic);
	};

	return (
		<form className="topic-form">
			<label htmlFor="topic">Pick a topic:</label>
			<Select handleSelect={handleSelect} topics={topics} name="trivia" />
			<Text />
			<Button
				className="submit-btn"
				handleClick={handleSubmit}
				text="Get question"
			/>
		</form>
	);
};

export default Form;
