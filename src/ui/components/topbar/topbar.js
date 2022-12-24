import "./topbar.css";
import { Header } from "../../elem/header/header";
import { Nav } from "../../elem/nav/nav";
import { Div } from "../../elem/div/div";
import { Button } from "../../elem/button/button";
import { Ul } from "../../elem/ul/ul";
import { Li } from "../../elem/li/li";
import { A } from "../../elem/a/a";
import MenuIcon from "../../../assets/images/menu-icon.svg";
import HomeIcon from "../../../assets/images/1515716962.svg";
import PlusIcon from "../../../assets/images/ftadd.svg";

export const Topbar = (() => {
	// <header>
	const header = Header();
	header.addClasses(["bg-primary"]);

	// <div class="container">
	const container = Div();
	container.addClasses([
		"container",
		"flex",
		"pt-regular",
		"pd-regular",
		"ps-regular",
		"justify-between",
	]);
	header.getElem.append(container.getElem);

	// <div class="col">
	const cols = [Div(), Div()];
	cols[0].addClasses(["col", "flex"]);
	cols[1].addClasses(["col", "flex"]);
	cols.forEach((col) => {
		container.getElem.append(col.getElem);
	});

	// <button class="menu">
	// 	 <img src="menu_url">
	// </button>
	const menu = Button();
	menu.addOrChangeAttribute("aria-expanded", "false");
	menu.addOrChangeAttribute("aria-controls", "primary-navigation");
	menu.addClasses(["hamburger", "icon", "pt-xsmall", "pd-xsmall", "ps-xsmall"]);
	const menuImg = new Image();
	menuImg.src = MenuIcon;
	menu.getElem.append(menuImg);
	cols[0].getElem.append(menu.getElem);
	menu.getElem.addEventListener("click", () => {
		const aside = document.querySelector("[data-visible]");
		const asideVisibility = aside.getAttribute("data-visible");
		const menuVisibility = menu.getElem.getAttribute("aria-expanded");
		// console.log(
		// 	aside.getAttribute("data-visible"),
		// 	menu.getElem.getAttribute("aria-expanded")
		// );
		if (menuVisibility === "false") {
			aside.setAttribute("data-visible", "true");
			menu.getElem.setAttribute("aria-expanded", "true");
		} else {
			aside.setAttribute("data-visible", "false");
			menu.getElem.setAttribute("aria-expanded", "false");
		}
	});
	// <button class="home">
	// 	 <img src="home_url">
	// </button>
	const home = Button();
	home.addClasses(["icon", "pt-xsmall", "pd-xsmall", "ps-xsmall"]);
	const homeImg = new Image();
	homeImg.src = HomeIcon;
	home.getElem.append(homeImg);
	cols[0].getElem.append(home.getElem);

	// <button class="plus">
	// 	 <img src="plus_url">
	// </button>
	const plus = Button();
	plus.addClasses(["icon", "pt-xsmall", "pd-xsmall", "ps-xsmall"]);
	const plusImg = new Image();
	plusImg.src = PlusIcon;
	plus.getElem.append(plusImg);
	cols[1].getElem.append(plus.getElem);

	return header;
})();
