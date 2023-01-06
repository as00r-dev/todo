import { AddTodo } from "../add-todo/add-todo";
import { Section } from "../../elem/section/section";
import { AddProject } from "../add-project/add-project";
import { TodoCompact } from "../todo-compact/todo-compact";
import { Note } from "../note/note";
import { Project } from "../project/project";
import { Div } from "../../elem/div/div";
import { TodoFactory } from "../../../logic/app/Todo/TodoFactory";

export const Dashboard = (() => {
	const dashboard = Section();
	dashboard.addClasses(["dashboard"]);

	const container = Div();
	container.addClasses(["container", "pt-regular", "ps-regular", "pd-regular"]);
	container.render(dashboard.getElem, "afterbegin");

	AddTodo.render(container.getElem, "afterbegin");
	AddProject.render(container.getElem, "afterbegin");

	const firstTodo = TodoCompact();
	firstTodo.initializeObject({
		title: "hello",
		description: "test",
		priority: "blue",
		project: "def",
		dueDate: "10/01/2023",
	});
	firstTodo.todo.render(container.getElem, "afterbegin");

	const secondTodo = TodoCompact();
	secondTodo.initializeObject({
		title: "hello2",
		description: "test2",
		priority: "blue",
		project: "def2",
		dueDate: "12/01/2023",
	});
	secondTodo.todo.render(firstTodo.todo.getElem, "afterend");

	const firstNote = Note();
	firstNote.initializeObject({
		title: "hello",
		description: "hello",
		project: "hello",
	});
	firstNote.note.render(container.getElem, "afterbegin");

	const firstProject = Project();
	firstProject.project.render(container.getElem, "beforeend");

	firstProject.getNotes().pushToList({
		title: "hello",
		description: "hello",
		project: "hello",
	});

	firstProject.initializeObject({
		name: "hello",
	});

	return dashboard;
})();
