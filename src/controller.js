import { createTask, task_list } from "./task.js";
import { TaskFormToggle } from "./index.js";


export function TaskManager() {
  let task_title = task_list[0].title;

  if (task_title == "") {
    titleBlankError();
    return;
  } 

    let title_box = document.getElementById("task_title");
    title_box.style.border = "none";

  createTask.push;

  console.log("Success! this task list is ", task_list);
  console.log("The task title is ", task_title);
  TaskFormToggle();
}

function titleBlankError() {
  let title_box = document.getElementById("task_title");
  title_box.style.border = "2px solid red";
    console.log("Please add a title to continue!");
    task_list.shift();
    console.log("We removed your last task attempt. this task list is now ",task_list);
}