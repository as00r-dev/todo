import "./todo-compact.css";
import { Button } from "../../elem/button/button";
import { Div } from "../../elem/div/div";
import { Heading } from "../../elem/heading/heading";
import { Input } from "../../elem/input/input";
import { Paragraph } from "../../elem/paragraph/paragraph";

export const TodoCompact = ((
	todoObject = {
		title: "title",
		description: "desc",
		priority: "red",
		project: "default",
		dueDate: "01/01/2023",
	}
) => {
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

	todo.getElem.style.setProperty("--p-color", todoObject.priority);

	const checkbox = Input();
	checkbox.addOrChangeAttribute("type", "checkbox");
	checkbox.render(todo.getElem, "afterbegin");

	const todoBody = Div();
	todoBody.addClasses(["flex"]);
	todoBody.render(checkbox.getElem, "afterend");

	const todoTitle = Heading(3);
	todoTitle.addContent(todoObject.title);
	todoTitle.render(todoBody.getElem, "afterbegin");

	const todoDetails = Button();
	todoDetails.addContent("details");
	todoDetails.render(todoTitle.getElem, "afterend");

	const deadline = Paragraph();
	deadline.addContent(todoObject.dueDate);
	deadline.render(todoDetails.getElem, "afterend");

	return todo;
})();
