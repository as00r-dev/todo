import "./add-note.css";
import CrossImage from "../../../assets/images/cross.svg";
import { Div } from "../../elem/div/div";
import { Button } from "../../elem/button/button";
import { Form } from "../../elem/form/form";
import { Input } from "../../elem/input/input";
import { Select } from "../../elem/select/select";
import { Option } from "../../elem/option/option";

export const AddNote = (() => {
	const addNote = Div();
	addNote.addClasses([
		"add-note",
		"flex",
		"flex-col",
		"justify-center",
		"bg-blur",
	]);
	addNote.addOrChangeAttribute("id", "add-note");
	addNote.addOrChangeAttribute("data-visible", "false");

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
	container.render(addNote.getElem, "afterbegin");

	const addNoteForm = Form();
	addNoteForm.addClasses(["flex", "flex-col"]);
	addNoteForm.addOrChangeAttribute("id", "add-note-form");
	addNoteForm.render(container.getElem, "afterbegin");

	const noteTitle = Input();
	noteTitle.addOrChangeAttribute("id", "note-title");
	noteTitle.addOrChangeAttribute("placeholder", "Write Title");
	noteTitle.addOrChangeAttribute("type", "text");
	noteTitle.addOrChangeAttribute("required", "");
	noteTitle.render(addNoteForm.getElem, "afterbegin");

	const noteDesc = Input();
	noteDesc.addOrChangeAttribute("id", "note-description");
	noteDesc.addOrChangeAttribute("placeholder", "Write Description");
	noteDesc.addOrChangeAttribute("type", "text");
	noteDesc.addOrChangeAttribute("required", "");
	noteTitle.render(noteTitle.getElem, "afterbegin");

	const noteProject = Select();
	noteProject.addOrChangeAttribute("id", "note-project");
	noteProject.addOrChangeAttribute("required", "");
	noteProject.render(noteDesc.getElem, "afterbegin");

	const projectList = _createOptionList(["Default", "Work", "Study"]);
	projectList.forEach((proj) => {
		if (proj.getElem.textContent === "Default") {
			proj.addOrChangeAttribute("selected", "");
		}
		proj.render(noteProject.getElem, "afterbegin");
	});

	const addNoteBtn = Button();
	addNoteBtn.render(noteProject.getElem, "afterend");

	const crossIcon = Button();
	crossIcon.addClasses(["icon", "pt-xsmall", "pd-xsmall", "ps-xsmall"]);
	const crossIconImg = new Image();
	crossIconImg.src = CrossImage;
	crossIcon.getElem.append(crossIconImg);
	crossIcon.render(container.getElem, "afterbegin");
	crossIcon.getElem.addEventListener("click", () => {
		const addBtnHeader = document.querySelector("#note-add");
		if (addBtnHeader.getAttribute("aria-expanded") === "true") {
			addBtnHeader.setAttribute("aria-expanded", "false");
			addNote.getElem.setAttribute("data-visible", "false");
		}
	});

	return addNote;
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
