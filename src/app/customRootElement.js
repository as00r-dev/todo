class MyApp extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log("App element connected!");
	}
}

customElements.define("my-app", MyApp);

export const app = document.createElement("my-app");
