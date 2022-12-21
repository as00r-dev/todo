import "./css/reset.css";
import "./css/root.css";
import "./css/utils.css";
import { Topbar } from "./ui/components/topbar/topbar";
import { Div } from "./ui/elem/div/div";

const root = Div();
root.addClasses(["root"]);
console.log(Topbar.header);
root.getElem.append(Topbar.header.getElem);

root.render(document.body, "afterbegin");
