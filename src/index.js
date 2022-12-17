// imports
import { hi } from "./components/hello-world/hi";

// select body
const body = document.querySelector("body");

// create root element
const root = document.createElement("div");

root.textContent = hi();

body.appendChild(root);
