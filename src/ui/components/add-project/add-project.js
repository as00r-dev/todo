import "./add-project.css";
import CrossImage from "../../../assets/images/cross.svg";
import { Div } from "../../elem/div/div";
import { Button } from "../../elem/button/button";
import { Form } from "../../elem/form/form";
import { Input } from "../../elem/input/input";

export const AddProject = (() => {
	// <div class="add-project">
	const addProject = Div();
	addProject.addClasses([
		"add-project",
		"flex",
		"flex-col",
		"justify-center",
		"bg-blur",
	]);
	addProject.addOrChangeAttribute("id", "add-project");
	addProject.addOrChangeAttribute("data-visible", "false");

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
	container.render(addProject.getElem, "afterbegin");

	// <form>
	const addProjectForm = Form();
	addProjectForm.addClasses(["flex", "flex-col"]);
	addProjectForm.addOrChangeAttribute("id", "add-project-form");
	addProjectForm.render(container.getElem, "afterbegin");

	// <input type = "text" id="title">
	const projectTitle = Input();
	projectTitle.addOrChangeAttribute("id", "project-title");
	projectTitle.addOrChangeAttribute("placeholder", "Write Title");
	projectTitle.addOrChangeAttribute("type", "text");
	projectTitle.addOrChangeAttribute("required", "");
	projectTitle.render(addProjectForm.getElem, "afterbegin");

	// <button>
	const submitBtn = Button();
	submitBtn.render(projectTitle.getElem, "afterend");
	submitBtn.addContent("Add Project");

	// <button id="close-add-project-form" class="cross">
	// 	 <img src="cross">
	// </button>
	const crossIcon = Button();
	crossIcon.addClasses(["icon", "pt-xsmall", "pd-xsmall", "ps-xsmall"]);
	const crossIconImg = new Image();
	crossIconImg.src = CrossImage;
	crossIcon.getElem.append(crossIconImg);
	crossIcon.render(container.getElem, "afterbegin");
	crossIcon.getElem.addEventListener("click", () => {
		const addBtnHeader = document.querySelector("#project-btn");
		if (addBtnHeader.getAttribute("aria-expanded") === "true") {
			addBtnHeader.setAttribute("aria-expanded", "false");
			addProject.getElem.setAttribute("data-visible", "false");
		}
	});

	return addProject;
})();
