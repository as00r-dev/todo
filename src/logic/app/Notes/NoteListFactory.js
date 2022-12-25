export const NoteList = () => {
	const _noteList = [];

	const pushToList = (note) => {
		_noteList.push(note);
	};

	const removeFromList = (id) => {
		_noteList.forEach((note, index) => {
			if (note.getId() == id) {
				_noteList.splice(index, 1);
			}
		});
	};

	const getAt = (position) => {
		return _noteList[position];
	};

	const getLength = () => {
		return _noteList.length;
	};

	return {
		getLength,
		pushToList,
		removeFromList,
		getAt,
	};
};
