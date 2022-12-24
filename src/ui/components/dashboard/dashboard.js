import { AddTodo } from "../add-todo/add-todo";
import { Section } from "../../elem/section/section";

export const Dashboard = (() => {
	const dashboard = Section();
	dashboard.addClasses(["dashboard"]);

	AddTodo.render(dashboard.getElem, "afterbegin");

	return dashboard;
})();
