export const TodoList = () => {
	const _todoList = [];

	const pushToList = (todo) => {
		_todoList.push(todo);
	};

	const removeFromList = (id) => {
		_todoList.forEach((todo, index) => {
			if (todo.getId() == id) {
				_todoList.splice(index, 1);
			}
		});
	};

	const getAt = (position) => {
		return _todoList[position];
	};

	const getLength = () => {
		return _todoList.length;
	};

	return {
		getLength,
		pushToList,
		removeFromList,
		getAt,
	};
};
