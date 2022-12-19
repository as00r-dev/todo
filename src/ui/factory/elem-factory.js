export const ElementFactory = (elemName) => {
	const element = document.createElement(elemName);

	const getElem = (() => element)();

	const addContent = (content) => {
		element.textContent = content;
	};

	const addClasses = (classArr) => {
		classArr.forEach((className) => {
			element.classList.add(className);
		});
	};

	const removeClass = (className) => {
		element.classList.remove(className);
	};

	const addOrChangeAttribute = (attrName, attrValue) => {
		element.setAttribute(attrName, attrValue);
	};

	const removeAttribute = (attrName) => {
		element.removeAttribute(attrName);
	};

	const render = (relative, location) => {
		relative.insertAdjacentElement(location, element);
	};

	return {
		getElem,
		addContent,
		removeClass,
		addClasses,
		addOrChangeAttribute,
		removeAttribute,
		render,
	};
};
