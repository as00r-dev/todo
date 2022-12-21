import { Header } from "../../elem/header/header";
import { Nav } from "../../elem/nav/nav";
import { Div } from "../../elem/div/div";
import { Button } from "../../elem/button/button";
import { Ul } from "../../elem/ul/ul";
import { Li } from "../../elem/li/li";
import { a } from "../../elem/a/a";

export const Topbar = (() => {
	// <header>
	const header = Header();

	// <div class="container">
	const container = Div();
	container.addClasses([
		"container",
		"flex",
		"pt-small",
		"pd-small",
		"ps-small",
	]);
	header.getElem.append(container.getElem);

	// <div class="col">
	const cols = [Div(), Div()];
	cols[0].addClasses(["col"]);
	cols[1].addClasses(["col"]);
	cols.forEach((col) => {
		container.getElem.append(col.getElem);
	});

	return {
		header,
	};
})();
