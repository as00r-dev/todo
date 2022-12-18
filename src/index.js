// imports
import { hi } from "./ui/components/hello-world/hi";
import { app } from "./app/customRootElement";

// select body
const body = document.querySelector("body");

app.textContent = hi("Sanskar");

body.appendChild(app);
