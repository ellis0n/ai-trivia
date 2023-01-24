import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";

const Form = ({ handleClick, data, label }) => {
	const [topic, setTopic] = useState("");

	const handleSelect = (selected) => {
		setTopic(selected);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		handleClick(topic);
	};

	return (
		<form className="topic-form">
			<label htmlFor="topic">{label}</label>
			<Select handleSelect={handleSelect} data={data} name="trivia" />
			<Input className="user-input" type="text" placeholder="Type your own.." />
			<Button
				className="submit-btn"
				handleClick={handleSubmit}
				text="Get question"
			/>
		</form>
	);
};

export default Form;
