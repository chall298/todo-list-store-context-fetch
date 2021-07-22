import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Button from "./button";
import PropTypes from "prop-types";

const Todo = ({ element, index }) => {
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState(false);
	const [update, setUpdate] = useState("");

	return (
		<div>
			<div className="text-center mt-5" key={index}>
				{!edit ? (
					`${index + 1} - ${element.label}`
				) : (
					<>
						<input placeholder={element.label} onChange={el => setUpdate(el.target.value)} value={update} />
					</>
				)}
				{!edit ? (
					<button className="btn btn-warning m-2" type="button" onClick={() => setEdit(true)}>
						<i className="far fa-edit" />
					</button>
				) : (
					<button
						className="btn btn-warning m-2"
						type="button"
						onClick={() => {
							let updateItem = store.todos;
							updateItem[index] = { label: update, done: false };
							actions.editTodo(updateItem);
							setEdit(false);
							setUpdate("");
						}}>
						<i className="far fa-check-square" />
					</button>
				)}

				<Button naming={element.label} style={"btn btn-danger"} index={index} />
			</div>
		</div>
	);
};

Todo.propTypes = {
	element: PropTypes.object,
	index: PropTypes.number
};

export default Todo;
