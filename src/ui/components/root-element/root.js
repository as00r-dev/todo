import { Div } from "../../elem/div/div";

export const Root = (() => {
	const root = Div();
	root.addClasses(["root"]);
	return root;
})();
