import "./css/reset.css";
import "./css/root.css";
import "./css/utils.css";
import { Topbar } from "./ui/components/topbar/topbar";
import { Div } from "./ui/elem/div/div";

const root = Div();
root.addClasses(["root"]);
root.getElem.append(Topbar.getElem);

root.render(document.body, "afterbegin");
