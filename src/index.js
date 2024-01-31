import './style.css';
import { createForm, displayTask } from "./task.js";

createForm();

//create submit button
// let form = document.getElementById("form");
let button = document.createElement("button");

document.body.appendChild(button);

button.innerText = "Submit the info!";

button.addEventListener("click", displayTask);

