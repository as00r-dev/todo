import "./todo-compact.css";
import { Button } from "../../elem/button/button";
import { Div } from "../../elem/div/div";
import { Heading } from "../../elem/heading/heading";
import { Input } from "../../elem/input/input";
import { Paragraph } from "../../elem/paragraph/paragraph";

export const TodoCompact = (() => {
	const _todoObject = {
		title: "title",
		description: "desc",
		priority: "red",
		project: "default",
		dueDate: "01/01/2023",
	};

	const todo = Div();
	todo.addClasses([
		"container",
		"flex",
		"todo-compact",
		"pt-regular",
		"ps-regular",
		"pd-regular",
		"justify-between",
		"box-shadow-400",
		"br-400",
	]);

	const initializeObject = (obj) => {
		_todoObject.title = obj.title;
		_todoObject.description = obj.description;
		_todoObject.priority = obj.priority;
		_todoObject.project = obj.project;
		_todoObject.dueDate = obj.dueDate;
		todo.getElem.style.setProperty("--p-color", _todoObject.priority);
		todoTitle.addContent(_todoObject.title);
		deadline.addContent(_todoObject.dueDate);
	};

	const checkbox = Input();
	checkbox.addOrChangeAttribute("type", "checkbox");
	checkbox.render(todo.getElem, "afterbegin");

	const todoBody = Div();
	todoBody.addClasses(["flex"]);
	todoBody.render(checkbox.getElem, "afterend");

	const todoTitle = Heading(3);
	todoTitle.render(todoBody.getElem, "afterbegin");

	const todoDetails = Button();
	todoDetails.addContent("details");
	todoDetails.render(todoTitle.getElem, "afterend");

	const deadline = Paragraph();
	deadline.render(todoDetails.getElem, "afterend");

	return { todo, initializeObject };
})();
