import React from "react";

const Select = ({ handleSelect, topics, name }) => {
	return (
		<>
			<select name={name} onChange={(e) => handleSelect(e.target.value)}>
				{topics.map((value) => (
					<option key={value} value={value}>
						{value.toUpperCase()}
					</option>
				))}
			</select>
		</>
	);
};

export default Select;
