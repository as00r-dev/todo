import "./add-todo.css";
import { Aside } from "../../elem/aside/aside";
import { Nav } from "../../elem/nav/nav";
import { Div } from "../../elem/div/div";
import { Button } from "../../elem/button/button";
import { Ul } from "../../elem/ul/ul";
import { Li } from "../../elem/li/li";
import { A } from "../../elem/a/a";
import { Heading } from "../../elem/heading/heading";
import MenuIcon from "../../../assets/images/menu-icon.svg";
import HomeIcon from "../../../assets/images/1515716962.svg";
import PlusIcon from "../../../assets/images/ftadd.svg";

export const AddTodo = (() => {
	// <div class="add-todo">
	const addTodo = Div();
	addTodo.addClasses(["add-todo"]);

	// <div class="container">
	const container = Div();
	container.addClasses([
		"container",
		"flex",
		"flex-col",
		"pt-regular",
		"pd-regular",
		"ps-regular",
		"justify-center",
	]);
	container.render(addTodo.getElem, "afterbegin");

	// <div class="col">
	const cols = [Div(), Div()];
	cols[0].addClasses(["col", "flex"]);
	cols[1].addClasses(["col", "flex", "flex-col"]);
	cols.forEach((col) => {
		container.getElem.append(col.getElem);
	});

	return addTodo;
})();
