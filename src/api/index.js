import { v4 } from 'node-uuid';

const fakeDatabase = {
	todos : [{
		id : v4(),
		text : 'hi',
		completed : true 
	},{
		id : v4(),
		text : 'hello',
		completed : true 
	},{
		id : v4(),
		text : 'im good',
		completed : false 
	}]
};

const delay = (ms) => 
	new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) => 
	delay(500).then(()=> {
		switch(filter) {
			case 'all' : 
				return fakeDatabase.todos;
			case 'completed' :
				return fakeDatabase.todos.filter(t => t.completed);
			case 'active' : 
				return fakeDatabase.todos.filter(t => !t.completed);
			default : 
				throw new Error(`Unknow filter: ${filter}`);
		}
});

export const addTodo = (text) => 
	delay(500).then(()=> {
		const todo = {
			id : v4(),
			text,
			completed : false
		}
		fakeDatabase.todos.push(todo);
		return todo;
	})

export const toggleTodo = (id) => 
	delay(500).then(()=> {
		const todo = fakeDatabase.todos.find(t => t.id === id);
		todo.completed = !todo.completed;
		return todo;
	})	