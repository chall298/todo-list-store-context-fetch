import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Button = ({ button, style, index }) => {
	const { store, actions } = useContext(Context);
	const [state, setState] = React.useState("");
	const [data, setData] = React.useState("hello world");
	// update(data);
	button = store.data[index];
	// let id = match.params.id;
	let button2 = store.todos[index];
	return (
		<>
			<button
				className={style}
				onClick={() => {
					actions.deleteTodo(store.todos.filter((e, i) => index !== i));
					actions.getTodo();
				}}>
				X
			</button>
		</>
	);
};

Button.propTypes = {
	button: PropTypes.string,
	style: PropTypes.string,
	index: PropTypes.number
};

export default Button;

// button === "Hide" ? "btn btn-danger" : "btn btn-success"j

// onClick={() => actions.deleteItem(store.data)}
