const full = "https://assets.breatheco.de/apis/fake/todos/user/kingkremas";
const url = "https://assets.breatheco.de/apis/fake/todos/";
const endPoint = "user/kingkremas";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			data: [],
			todos: []
		},
		actions: {
			// API/FETCH
			getTodo: () => {
				fetch(full)
					.then(res =>
						// console.log("response", res)
						res.json()
					)
					.then(response => setStore({ todos: response }));
			},
			deleteTodo: data => {
				fetch(full, {
					method: "PUT", // or 'POST'
					body: JSON.stringify(data), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(() => getActions().getTodo());
			},
			// still working on addtodo
			addTodo: newData => {
				// let data = getStore().data;
				// newData = [...data, newData];
				fetch(full, {
					method: "PUT", // or 'POST'
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newData) // data can be `string` or {object}!
				}).then(() => getActions().getTodo());
			},
			editTodo: newData => {
				fetch(full, {
					method: "PUT", // or 'POST'
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newData) // data can be `string` or {object}!
				}).then(() => getActions().getTodo());
			},
			// -------------------------------------------------------------------------------
			// store/context
			updateTodo: () => {
				let data = getStore().todos;
				setStore({ data: [...data, newData] });
			},
			// Use getActions to call a function within a fuction
			updateArray: newData => {
				let data = getStore().data;
				setStore({ data: [...data, newData] });
			},
			deleteItem: index => {
				let data = getStore().data;
				setStore({ data: data.filter(item => index !== item) });
			},
			updateData: parameter => {
				setStore({ data: parameter });
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
//
