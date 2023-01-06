import { IdGenerator } from "../IdGenerator";

export const TodoFactory = ((
	title,
	description,
	priority,
	project,
	dueDate
) => {
	const todo = {
		title,
		description,
		priority,
		project,
		dueDate,
	};

	IdGenerator.addIdTo(todo);

	const createTestTodo = () => {
		todo.title = "name";
		todo.description = "description";
		todo.priority = "P4";
		todo.project = "Default";
		todo.dueDate = "01/01/2023";
	};

	const modify = (updatedTodo) => {
		if (updatedTodo.title) todo.title = updatedTodo.title;
		if (updatedTodo.description) todo.description = updatedTodo.description;
		if (updatedTodo.priority) todo.priority = updatedTodo.priority;
		if (updatedTodo.project) todo.project = updatedTodo.project;
		if (updatedTodo.dueDate) todo.dueDate = updatedTodo.dueDate;
	};

	const getTitle = () => {
		return `${todo.title}`;
	};

	const getDesc = () => {
		return `${todo.description}`;
	};

	const getPriority = () => {
		return `${todo.priority}`;
	};

	const getProject = () => {
		return `${todo.project}`;
	};

	const getDueDate = () => {
		return `${todo.dueDate}`;
	};

	const getId = () => {
		return `${todo.id}`;
	};

	const get = () => {
		return todo;
	};

	return {
		modify,
		getTitle,
		getDesc,
		getPriority,
		getProject,
		getDueDate,
		getId,
		get,
		createTestTodo,
	};
})();
