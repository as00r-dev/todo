import { Header } from "../elem/header";
import { Nav } from "../elem/nav";
import { Div } from "../elem/div";
import { Button } from "../elem/button";
import { Ul } from "../elem/ul";
import { Li } from "../elem/li";
import { a } from "../elem/a";

const Topbar = (() => {
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
