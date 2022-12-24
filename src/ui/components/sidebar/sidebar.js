import "./sidebar.css";
import { Aside } from "../../elem/aside/aside";
import { Nav } from "../../elem/nav/nav";
import { Div } from "../../elem/div/div";
import { Button } from "../../elem/button/button";
import { Ul } from "../../elem/ul/ul";
import { Li } from "../../elem/li/li";
import { A } from "../../elem/a/a";
import { Heading } from "../../elem/heading/heading";
import MenuIcon from "../../../assets/images/menu-icon.svg";
import HomeIcon from "../../../assets/images/1515716962.svg";
import PlusIcon from "../../../assets/images/ftadd.svg";

export const Sidebar = (() => {
	// <aside>
	const sidebar = Aside();
	sidebar.addClasses(["bg-light-300"]);
	sidebar.addOrChangeAttribute("id", "primary-navigation");
	sidebar.addOrChangeAttribute("data-visible", "false");

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
	]);
	container.render(sidebar.getElem, "afterbegin");

	// <div class="col">
	const cols = [Div(), Div()];
	cols[0].addClasses(["col", "flex"]);
	cols[1].addClasses(["col", "flex", "flex-col"]);
	cols.forEach((col) => {
		container.getElem.append(col.getElem);
	});

	// <h3></h3>
	const projectHeading = Heading(3);
	projectHeading.addContent("Projects");
	projectHeading.render(cols[1].getElem, "afterbegin");

	// <ul></ul>
	const schedule = Ul();
	schedule.addClasses(["schedule"]);
	schedule.render(cols[0].getElem, "afterbegin");

	//<li><a></a></li>
	const scheduleItems = _createLiItems([
		"Today",
		"This Week",
		"Upcoming",
		"More Filters",
	]);
	scheduleItems.forEach((item) => {
		item.render(schedule.getElem, "afterbegin");
	});

	// <ul></ul>
	const projects = Ul();
	projects.addClasses(["projects"]);
	projects.render(cols[1].getElem, "beforeend");

	//<li><a></a></li>
	const projectItems = _createLiItems(["Work", "Study"]);
	projectItems.forEach((item) => {
		item.render(projects.getElem, "afterbegin");
	});

	return sidebar;
})();

function _createLiItems(array) {
	const listItems = [];
	array.forEach((elem) => {
		const li = Li();
		const a = A();
		a.addContent(elem);
		a.render(li.getElem, "afterbegin");
		listItems.unshift(li);
	});
	return listItems;
}
