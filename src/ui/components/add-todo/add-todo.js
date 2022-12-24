import "./add-todo.css";
import { Div } from "../../elem/div/div";
import { Button } from "../../elem/button/button";
import { A } from "../../elem/a/a";
import { Heading } from "../../elem/heading/heading";
import { Form } from "../../elem/form/form";
import { Input } from "../../elem/input/input";

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
