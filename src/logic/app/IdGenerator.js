export const IdGenerator = (() => {
	let _id = 0;

	const newId = () => {
		return _id++;
	};

	return {
		newId,
	};
})();
