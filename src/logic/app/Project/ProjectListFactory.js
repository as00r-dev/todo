export const ProjectList = () => {
	const _projectList = [];

	const pushToList = (project) => {
		_projectList.push(project);
	};

	const removeFromList = (id) => {
		_projectList.forEach((project, index) => {
			if (project.getId() == id) {
				_projectList.splice(index, 1);
			}
		});
	};

	const getAt = (position) => {
		return _projectList[position];
	};

	const getLength = () => {
		return _projectList.length;
	};

	return {
		getLength,
		pushToList,
		removeFromList,
		getAt,
	};
};
