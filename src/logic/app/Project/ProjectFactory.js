import { IdGenerator } from "../IdGenerator";

export const ProjectFactory = (title) => {
	const _project = {
		title,
		todos,
		notes,
	};

	IdGenerator.addIdTo(_project);

	const getTitle = () => {
		return `${_project.title}`;
	};

	const getTodos = () => {
		return _project.todos;
	};

	const getNotes = () => {
		return _project.notes;
	};

	const getId = () => {
		return `${_project.id}`;
	};

	const modify = (newName) => {
		_project.title = newName;
	};

	return {
		getId,
		getTitle,
		getTodos,
		getNotes,
		modify,
	};
};
