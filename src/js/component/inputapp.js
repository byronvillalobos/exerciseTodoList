import ReactDOM from "react-dom";
import React, { useState } from "react";

export default function InputApp() {
	const [inputValue, setInputValue] = React.useState("");
	const [list, setlist] = React.useState([]);

	const validateInput = () => {
		if (inputValue === "") alert("The input cannot be empty");
		else alert("All perfect!");
	};
	return (
		<div>
			<input
				type="text"
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
			/>
			<button onClick={validateInput}>Click to validate empty</button>
		</div>
	);
}

ReactDOM.render(<InputApp />, document.getElementById("myDiv"));
