import React from "react";

const Text = () => {
	return (
		<div className="user-input">
			<form>
				<label htmlFor="text">Choose your own.</label>

				<input
					type="text"
					id="text"
					name="text"
					placeholder="Type your own..."
				/>
			</form>
		</div>
	);
};

export default Text;
