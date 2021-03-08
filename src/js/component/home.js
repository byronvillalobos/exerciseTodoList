import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [inputValue, setInputValue] = React.useState("");
	const [list, setlist] = React.useState([]);

	return (
		<div className="container mt-5 text-center">
			<div>
				<div>
					{" "}
					<h1>To Do List </h1>{" "}
				</div>

				<input
					id="myInput"
					type="text"
					placeholder="inputValue"
					onChange={e => {
						setInputValue(e.target.value);
					}}
					value={inputValue}
					onKeyPress={e => {
						if (e.key === "Enter") {
							console.log(list);

							setlist(list.concat(inputValue));
						}
					}}
				/>
			</div>
		</div>
	);
}
