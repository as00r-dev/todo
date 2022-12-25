export const IdGenerator = (() => {
	let _id = 0;

	const addIdTo = (obj) => {
		if (!obj.id) {
			obj.id = _newId();
		}
	};

	const _newId = () => {
		return _id++;
	};

	return {
		addIdTo,
	};
})();
