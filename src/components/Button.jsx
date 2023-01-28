import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	cursor: pointer;
	color: ${({ theme }) => {
		switch (theme) {
			case "answer-btn":
				return "#F4F3EE";
			case "form-btn":
				return "black";
			default:
				return "black";
		}
	}};
	background-color: ${({ theme }) => {
		switch (theme) {
			case "answer-btn":
				return "#8A817C";
			case "form-btn":
				return "white";
			default:
				return "red";
		}
	}};
	border: none;
	border-radius: 8px;
	padding: 0.5em;
	font-size: 1em;
	font-weight: 600;

	&:hover {
		background-color: ${({ theme }) => {
			switch (theme) {
				case "answer-btn":
					return "#8a817caa";
				case "form-btn":
					return "white";
				default:
					return "red";
			}
		}};
		color: ${({ theme }) => {
			switch (theme) {
				case "answer-btn":
					return "#F4F3EE";
				case "form-btn":
					return "black";
				default:
					return "black";
			}
		}};
	}
`;

const Button = ({ text, handleClick, theme }) => {
	const handleClickWithPrevent = (e) => {
		e.preventDefault();
		handleClick();
	};
	return (
		<StyledButton
			type="submit"
			onClick={(e) => {
				if (typeof handleClick === "function") {
					handleClickWithPrevent(e);
				}
			}}
			theme={theme}
		>
			{text}
		</StyledButton>
	);
};

export default Button;
