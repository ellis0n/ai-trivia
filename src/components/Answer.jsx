import React from "react";

const Answer = ({ data, confirm }) => {
	return (
		<div className="choice-card" onClick={confirm}>
			<p className="choice">{data}</p>
		</div>
	);
};

export default Answer;
