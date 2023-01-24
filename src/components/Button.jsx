import React from "react";

const Button = ({ className, text, handleClick }) => {
	return (
		<button className={className} type="submit" onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
