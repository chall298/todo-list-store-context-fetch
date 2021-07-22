import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Button from "../component/button";
import PropTypes from "prop-types";
import Todo from "../component/todo";

export const Home = ({ index }) => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState("");

	const todoList = store.todos;
	const [edit, setEdit] = useState(false);
	const [update, setUpdate] = useState("");
	let todos = store.todos[index];

	return (
		<div className="text-center mt-5">
			<h2>To do list</h2>
			<input value={state} onChange={e => setState(e.target.value)} />
			{state === "" ? (
				""
			) : (
				<button
					className="m-2"
					onClick={() => {
						actions.addTodo([...todoList, { label: state, done: false }]);
						setState("");
					}}>
					Add
				</button>
			)}
			{store.todos &&
				store.todos.map((element, index) => {
					return <Todo key={index} element={element} index={index} />;
				})}

			<div>{store.todos.length === 0 ? "" : store.todos.length + "items left"}</div>
		</div>
	);
};

Home.propTypes = {
	index: PropTypes.number
};
