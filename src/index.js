import './style.css';
import { createForm, } from "./task.js";

function createTaskHolder() {
    let task_container = document.createElement("div");
    task_container.setAttribute("id","container");

    document.body.append(task_container);
}

createTaskHolder();
createForm();