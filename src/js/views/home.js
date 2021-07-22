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

// update={getFromChild()}

{
	/* <Button button={buttonName} />
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
			<Button button={"show"} /> */
}

// const [getData, setGetData] = useState("");
// const getFromChild = hello => {
// 	setGetData(hello);
// };

// let buttonName = "Hide";

{
	/* <div className="text-center mt-5" key={index}>
							{!edit ? (
								`${index + 1} - ${element.label}`
							) : (
								<>
									<input
										placeholder={element.label}
										onChange={el => setUpdate(el.target.value)}
										value={update}
									/>
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
						</div> */
}
