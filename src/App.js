import "./css/reset.css";
import { Heading } from "./ui/elem/heading/heading";

const H1 = Heading(1);
const H2 = Heading(2);

H1.addContent("I am H1");
H2.addContent("I am H2");

H1.addClasses(["1", "2", "3"]);
H2.addClasses(["3", "4", "5"]);

H1.addOrChangeAttribute("data-id", "1");
H2.addOrChangeAttribute("data-id", "2");

H1.removeClass("1");
H2.removeClass("3");

H1.removeAttribute("data-id");
H2.removeAttribute("data-id");

H1.render(document.body, "beforeend");
H2.render(document.body, "afterbegin");
