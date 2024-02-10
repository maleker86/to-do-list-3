import { task_list } from './task.js';

export function logTask() {
    let task_title = task_list[0].title;
  
    if (task_title == "") {
        logError();
    } else {
        console.log("The title is ", task_title);
    }
  }
  
  function logError() {
    // let title_box = document.getElementById("task_title")
    console.log("Please add a title to continue!");
    // title_box.style.border = "2px solid red";
  }
  