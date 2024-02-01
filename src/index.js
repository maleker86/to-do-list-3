import './style.css';
import { createForm, CreateTask } from "./task.js";

createForm();

let button = document.createElement("button");

document.body.appendChild(button);

button.innerText = "Submit the info!";

button.addEventListener("click", CreateTask);