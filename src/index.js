import './style.css';
import { createForm, createTaskHolder, } from "./task.js";

const header = document.createElement("div");
const main = document.createElement("div");
const footer = document.createElement("div");
const task_button = document.createElement("button");

document.body.append(header);
document.body.append(main);
document.body.append(footer);
header.setAttribute("id","header");
main.setAttribute("id","main");
footer.setAttribute("id","footer");

header.append(task_button);
task_button.addEventListener("click",createForm)
task_button.setAttribute("grid-area","header");
task_button.innerText = "Add Task";

createTaskHolder();