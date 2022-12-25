import { IdGenerator } from "../IdGenerator";

export const ProjectFactory = (title) => {
	const _project = {
		title,
	};

	IdGenerator.addIdTo(_project);

	const getTitle = () => {
		return `${_project.title}`;
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
		modify,
	};
};
