import "./project.css";
import { Div } from "../../elem/div/div";
import { Heading } from "../../elem/heading/heading";
import { TodoCompact } from "../todo-compact/todo-compact";
import { TodoList } from "../../../logic/app/Todo/TodoListFactory";
import { NoteList } from "../../../logic/app/Notes/NoteListFactory";
import { Note } from "../note/note";

export const Project = () => {
	const _projectObj = {
		name: "default",
		todos: TodoList,
		notes: NoteList,
	};

	const project = Div();
	project.addClasses([
		"project",
		"container",
		"pt-regular",
		"pd-regular",
		"ps-regular",
	]);

	const initializeObject = (obj) => {
		_projectObj.name = obj.name;
		h1.addContent(_projectObj.name);
		for (let i = 0; i < _projectObj.todos.getLength(); i++) {
			const todoItem = TodoCompact();
			todoItem.initializeObject(_projectObj.todos.getAt(i));
			todoItem.todo.render(cols[0].getElem, "afterbegin");
		}

		for (let i = 0; i < _projectObj.notes.getLength(); i++) {
			const noteElem = Note();
			noteElem.initializeObject(_projectObj.notes.getAt(i));
			noteElem.note.render(cols[1].getElem, "afterbegin");
		}
	};

	const getTodos = () => {
		return _projectObj.todos;
	};

	const getNotes = () => {
		return _projectObj.notes;
	};

	const h1 = Heading(1);
	h1.render(project.getElem, "afterbegin");

	const projectWrapper = Div();
	projectWrapper.render(h1.getElem, "afterend");
	projectWrapper.addClasses(["flex", "flex-col"]);

	const cols = [Div(), Div()];
	cols[0].render(projectWrapper.getElem, "afterbegin");
	cols[0].addClasses(["col", "flex", "flex-col"]);
	cols[1].render(cols[0].getElem, "afterend");
	cols[1].addClasses(["col", "flex", "flex-col"]);

	return { project, initializeObject, getTodos, getNotes };
};
