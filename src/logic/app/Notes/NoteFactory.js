import { IdGenerator } from "../IdGenerator";

export const Note = (title, description, project) => {
	const _note = {
		title,
		description,
		project,
	};

	IdGenerator.addIdTo(_note);

	const getTitle = () => {
		return `${_note.title}`;
	};

	const getDesc = () => {
		return `${_note.description}`;
	};

	const getProject = () => {
		return `${_note.project}`;
	};

	const getId = () => {
		return `${_note.id}`;
	};

	const get = () => {
		return _note;
	};

	const modify = (obj) => {
		if (obj.title) _note.title = obj.title;
		if (obj.description) _note.description = obj.description;
		if (obj.project) _note.project = obj.project;
	};

	return {
		getId,
		getTitle,
		getDesc,
		get,
		modify,
		getProject,
	};
};
