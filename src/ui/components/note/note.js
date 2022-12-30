import "./note.css";
import { Div } from "../../elem/div/div";
import { Heading } from "../../elem/heading/heading";
import { Paragraph } from "../../elem/paragraph/paragraph";
import { Button } from "../../elem/button/button";

export const Note = ((
	noteObj = {
		title: "title",
		description: "description",
		project: "default",
	}
) => {
	const noteWrapper = Div();
	noteWrapper.addClasses([
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

	const noteTitle = Heading(3);
	noteTitle.addContent(noteObj.title);
	noteTitle.render(noteWrapper.getElem, "afterbegin");

	const noteDesc = Paragraph();
	noteDesc.addContent(noteObj.description);
	noteDesc.render(noteTitle.getElem, "afterend");

	const noteProject = Paragraph();
	noteProject.addContent(noteObj.project);
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

	return noteWrapper;
})();
