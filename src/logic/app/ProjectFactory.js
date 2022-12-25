export const ProjectFactory = () => {
	const modifyTodo = (updatedTodo) => {
		if (updatedTodo.title) _todo.title = updatedTodo.title;
		if (updatedTodo.description) _todo.description = updatedTodo.description;
		if (updatedTodo.priority) _todo.priority = updatedTodo.priority;
		if (updatedTodo.project) _todo.project = updatedTodo.project;
		if (updatedTodo.dueDate) _todo.dueDate = updatedTodo.dueDate;
	};

	const getTitle = () => {
		return `${_todo.title}`;
	};

	const getDesc = () => {
		return `${_todo.description}`;
	};

	const getPriority = () => {
		return `${_todo.priority}`;
	};

	const getProject = () => {
		return `${_todo.project}`;
	};

	const getDueDate = () => {
		return `${_todo.dueDate}`;
	};

	return {
		modifyTodo,
		getTitle,
		getDesc,
		getPriority,
		getProject,
		getDueDate,
	};
};
