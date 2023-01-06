import "./note.css";
import { Div } from "../../elem/div/div";
import { Heading } from "../../elem/heading/heading";
import { Paragraph } from "../../elem/paragraph/paragraph";
import { Button } from "../../elem/button/button";

export const Note = (() => {
	const _noteObj = {
		title: "title",
		description: "description",
		project: "default",
	};

	const note = Div();
	note.addClasses([
		"container",
		"flex",
		"flex-col",
		"note",
		"pt-regular",
		"ps-regular",
		"pd-regular",
		"justify-between",
		"box-shadow-400",
		"br-400",
		"md-regular",
	]);

	const initializeObject = (obj) => {
		_noteObj.title = obj.title;
		_noteObj.description = obj.description;
		_noteObj.project = obj.project;
		noteTitle.addContent(_noteObj.title);
		noteDesc.addContent(_noteObj.description);
		noteProject.addContent(_noteObj.project);
	};

	const noteTitle = Heading(3);
	noteTitle.render(note.getElem, "afterbegin");

	const noteDesc = Paragraph();
	noteDesc.render(noteTitle.getElem, "afterend");

	const noteProject = Paragraph();
	noteProject.render(noteDesc.getElem, "afterend");

	const buttonsWrapper = Div();
	buttonsWrapper.addClasses(["btn-wrapper", "flex"]);
	buttonsWrapper.render(noteProject.getElem, "afterend");

	const editNote = Button();
	editNote.addContent("edit");
	editNote.render(buttonsWrapper.getElem, "afterbegin");

	const removeNote = Button();
	removeNote.addContent("remove");
	removeNote.render(buttonsWrapper.getElem, "afterbegin");

	return { note, initializeObject };
})();
