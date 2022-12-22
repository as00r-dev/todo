import "./topbar.css";
import { Header } from "../../elem/header/header";
import { Nav } from "../../elem/nav/nav";
import { Div } from "../../elem/div/div";
import { Button } from "../../elem/button/button";
import { Ul } from "../../elem/ul/ul";
import { Li } from "../../elem/li/li";
import { a } from "../../elem/a/a";
import MenuIcon from "../../../assets/images/menu-icon.svg";
import HomeIcon from "../../../assets/images/1515716962.svg";
import PlusIcon from "../../../assets/images/ftadd.svg";

export const Topbar = (() => {
	// <header>
	const header = Header();

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

	// <div class="logo">
	// 	 <img src="logo_url">
	// </div>
	const logo = Div();
	logo.addClasses(["icon"]);
	const logoImg = new Image();
	logoImg.src = MenuIcon;
	logo.getElem.append(logoImg);
	cols[0].getElem.append(logo.getElem);

	// <div class="home">
	// 	 <img src="home_url">
	// </div>
	const home = Div();
	home.addClasses(["icon"]);
	const homeImg = new Image();
	homeImg.src = HomeIcon;
	home.getElem.append(homeImg);
	cols[0].getElem.append(home.getElem);

	// <div class="plus">
	// 	 <img src="plus_url">
	// </div>
	const plus = Div();
	plus.addClasses(["icon"]);
	const plusImg = new Image();
	plusImg.src = PlusIcon;
	plus.getElem.append(plusImg);
	cols[1].getElem.append(plus.getElem);

	return header;
})();
