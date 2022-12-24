import "./add-todo.css";
import CrossImage from "../../../assets/images/cross.svg";
import { Div } from "../../elem/div/div";
import { Button } from "../../elem/button/button";
import { Form } from "../../elem/form/form";
import { Input } from "../../elem/input/input";
import { Select } from "../../elem/select/select";
import { Option } from "../../elem/option/option";

export const AddTodo = (() => {
	// <div class="add-todo">
	const addTodo = Div();
	addTodo.addClasses([
		"add-todo",
		"flex",
		"flex-col",
		"justify-center",
		"bg-blur",
	]);
	addTodo.addOrChangeAttribute("id", "add-todo");
	addTodo.addOrChangeAttribute("data-visible", "false");

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
		"box-shadow-400",
		"bg-light-300",
		"br-300",
	]);
	container.render(addTodo.getElem, "afterbegin");

	// <form>
	const addTodoForm = Form();
	addTodoForm.addClasses(["flex", "flex-col"]);
	addTodoForm.addOrChangeAttribute("id", "add-todo-form");
	addTodoForm.render(container.getElem, "afterbegin");

	// <input type = "text" id="title">
	const taskTitle = Input();
	taskTitle.addOrChangeAttribute("id", "task-title");
	taskTitle.addOrChangeAttribute("placeholder", "Write Title");
	taskTitle.addOrChangeAttribute("type", "text");
	taskTitle.addOrChangeAttribute("required", "");
	taskTitle.render(addTodoForm.getElem, "afterbegin");

	// <input type = "text" id="content">
	const taskContent = Input();
	taskContent.addOrChangeAttribute("id", "task-content");
	taskContent.addOrChangeAttribute("placeholder", "Some description");
	taskContent.addOrChangeAttribute("type", "text");
	taskContent.addOrChangeAttribute("required", "");
	taskContent.render(taskTitle.getElem, "afterend");

	// <input type = "date" id="content">
	const taskDeadline = Input();
	taskDeadline.addOrChangeAttribute("id", "task-deadline");
	taskDeadline.addOrChangeAttribute("type", "date");
	taskDeadline.addOrChangeAttribute("required", "");
	taskDeadline.render(taskContent.getElem, "afterend");

	// <select name="project-list" id="project-list" form="add-todo-form">
	// </select>
	const taskProject = Select();
	taskProject.addOrChangeAttribute("id", "task-project");
	taskProject.addOrChangeAttribute("type", "select");
	taskProject.addOrChangeAttribute("required", "");
	taskProject.render(taskContent.getElem, "afterend");

	// <option value="name">name</option>
	const projectList = _createOptionList(["Default", "Work", "Study"]);
	projectList.forEach((proj) => {
		if (proj.getElem.textContent === "Default") {
			proj.addOrChangeAttribute("selected", "");
		}
		proj.render(taskProject.getElem, "afterbegin");
	});

	// <select name="project-list" id="project-list" form="add-todo-form">
	// </select>
	const taskPriority = Select();
	taskPriority.addOrChangeAttribute("id", "task-priority");
	taskPriority.addOrChangeAttribute("type", "select");
	taskPriority.addOrChangeAttribute("required", "");
	taskPriority.render(taskContent.getElem, "afterend");

	// <option value="name">name</option>
	const priorityList = _createOptionList(["P1", "P2", "P3", "P4"]);
	priorityList.forEach((proj) => {
		proj.render(taskPriority.getElem, "afterbegin");
	});

	// <button>
	const addTask = Button();
	addTask.render(taskDeadline.getElem, "afterend");
	addTask.addContent("Add Task");

	// <button id="close-add-todo-form" class="cross">
	// 	 <img src="cross">
	// </button>
	const crossIcon = Button();
	crossIcon.addClasses(["icon", "pt-xsmall", "pd-xsmall", "ps-xsmall"]);
	const crossIconImg = new Image();
	crossIconImg.src = CrossImage;
	crossIcon.getElem.append(crossIconImg);
	crossIcon.render(container.getElem, "afterbegin");
	crossIcon.getElem.addEventListener("click", () => {
		const addBtnHeader = document.querySelector("#header-add");
		if (addBtnHeader.getAttribute("aria-expanded") === "true") {
			addBtnHeader.setAttribute("aria-expanded", "false");
			addTodo.getElem.setAttribute("data-visible", "false");
		}
	});

	return addTodo;
})();

function _createOptionList(array) {
	const projList = [];

	array.forEach((name) => {
		const op = Option();
		op.addOrChangeAttribute("value", name);
		op.addContent(name);
		projList.unshift(op);
	});

	return projList;
}
