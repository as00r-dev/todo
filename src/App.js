import "./css/reset.css";
import "./css/root.css";
import "./css/utils.css";
import { Topbar } from "./ui/components/topbar";
import { Div } from "./ui/elem/div";

const root = Div();
root.addClasses(["root"]);

const header = Topbar;

console.log(header);

root.render(document.body, "afterbegin");
