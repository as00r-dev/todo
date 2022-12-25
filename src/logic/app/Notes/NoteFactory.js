import { IdGenerator } from "../IdGenerator";

export const Note = (title, description, project) => {
	const note = {
		title,
		description,
		project,
	};

	IdGenerator.addIdTo(note);

	const getTitle = () => {
		return `${note.title}`;
	};

	const getDesc = () => {
		return `${note.description}`;
	};

	const getProject = () => {
		return `${note.project}`;
	};

	const getId = () => {
		return `${note.id}`;
	};

	const get = () => {
		return note;
	};

	const modify = (obj) => {
		if (obj.title) note.title = obj.title;
		if (obj.description) note.description = obj.description;
		if (obj.project) note.project = obj.project;
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
