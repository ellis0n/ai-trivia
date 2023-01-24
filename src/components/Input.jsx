import React from "react";
const Input = ({ className, type, placeholder }) => {
	return (
		<input
			className={className}
			type={type}
			name={type}
			placeholder={placeholder}
		/>
	);
};

export default Input;
