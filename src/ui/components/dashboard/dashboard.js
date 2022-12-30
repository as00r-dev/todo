import { AddTodo } from "../add-todo/add-todo";
import { Section } from "../../elem/section/section";
import { AddProject } from "../add-project/add-project";
import { TodoCompact } from "../todo-compact/todo-compact";
import { Note } from "../note/note";
import { Div } from "../../elem/div/div";

export const Dashboard = (() => {
	const dashboard = Section();
	dashboard.addClasses(["dashboard"]);

	const container = Div();
	container.addClasses(["container", "pt-regular", "ps-regular", "pd-regular"]);
	container.render(dashboard.getElem, "afterbegin");

	AddTodo.render(container.getElem, "afterbegin");
	AddProject.render(container.getElem, "afterbegin");
	TodoCompact.render(container.getElem, "afterbegin");
	Note.render(container.getElem, "afterbegin");

	return dashboard;
})();
