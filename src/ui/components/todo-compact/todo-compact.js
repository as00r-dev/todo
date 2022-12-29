import "./todo-compact.css";
import { Button } from "../../elem/button/button";
import { Div } from "../../elem/div/div";
import { Heading } from "../../elem/heading/heading";
import { Input } from "../../elem/input/input";
import { Paragraph } from "../../elem/paragraph/paragraph";

export const TodoCompact = (() => {
	const todo = Div();
	todo.addClasses([
		"container",
		"flex",
		"todo-compact",
		"pt-regular",
		"ps-regular",
		"pd-regular",
		"justify-center",
		"box-shadow-400",
		"br-400",
	]);

	const checkbox = Input();
	checkbox.addOrChangeAttribute("type", "checkbox");
	checkbox.render(todo.getElem, "afterbegin");

	const todoBody = Div();
	todoBody.addClasses(["flex"]);
	todoBody.render(checkbox.getElem, "afterend");

	const todoTitle = Heading(3);
	todoTitle.addContent("Title Goes Here");
	todoTitle.render(todoBody.getElem, "afterbegin");

	const todoDetails = Button();
	todoDetails.addContent("Details");
	todoDetails.render(todoTitle.getElem, "afterend");

	const dueDate = Paragraph();
	dueDate.addContent("45 days left");
	dueDate.render(todoDetails.getElem, "afterend");

	return todo;
})();
