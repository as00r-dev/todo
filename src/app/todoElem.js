class Todo extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log("App element connected!");
	}
}

customElements.define("to-do", Todo);

export const app = document.createElement("to-do");
