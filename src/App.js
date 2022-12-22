import "./css/reset.css";
import "./css/root.css";
import "./css/utils.css";
import { Topbar } from "./ui/components/topbar/topbar";
import { Div } from "./ui/elem/div/div";
import { Main } from "./ui/elem/main-html/main-html";
import { Footer } from "./ui/elem/footer/footer";

const root = Div();
const main = Main();
const footer = Footer();

root.addClasses(["root"]);

Topbar.render(root.getElem, "afterbegin");
main.render(Topbar.getElem, "afterend");
footer.render(root.getElem, "beforeend");
root.render(document.body, "afterbegin");
