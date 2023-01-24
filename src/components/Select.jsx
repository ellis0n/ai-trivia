import React from "react";

const Select = ({ handleSelect, data, name }) => {
	return (
		<select name={name} onChange={(e) => handleSelect(e.target.value)}>
			{data.map((value) => (
				<option key={value} value={value}>
					{value}
				</option>
			))}
		</select>
	);
};

export default Select;
