import "./style.css";
import { tasks } from "./task.js";
import { task_list } from "./controller.js";
import { TaskManager, addTask, logTask, } from "./controller.js";

//declare default page!
const navigation = document.getElementById("navigation");
const main = document.createElement("div");
const footer = document.createElement("div");

let task_button = document.createElement("button");

// document.body.append(navigation);
// document.body.append(main);
// document.body.append(footer);
// navigation.setAttribute("id", "navigation");
// main.setAttribute("id", "main");
// footer.setAttribute("id", "footer");

navigation.append(task_button);
task_button.addEventListener("click", TaskFormToggle);
task_button.setAttribute("grid-area", "navigation");
task_button.innerText = "Add Task";

// //make task & project holder on main section
// let task_container = document.createElement("div");
// let project_container = document.createElement("div");

// task_container.setAttribute("id", "task_container");
// project_container.setAttribute("id", "project_container");

// main.append(task_container,project_container);

//create Form
const form = document.createElement("form");
const field_set = document.createElement("fieldset");
const field_legend = document.createElement("legend");
let h1 = document.createElement("h1");

document.body.prepend(form);
form.style.display = "grid";
form.prepend(h1);
h1.innerText = "New Task:";
form.setAttribute("id", "task_form");

//make invisible
form.style.display = "none";

// create fieldsets
function createFormElement(
  item_id,
  name,
  label_text,
  element_tag,
  element_type,
) {
  const field_label = document.createElement("label");
  const element_itself = document.createElement(element_tag);

  form.appendChild(field_label);
  form.appendChild(element_itself);

  element_itself.setAttribute("id", item_id);
  element_itself.setAttribute("name", name);
  element_itself.setAttribute("label", label_text);
  field_label.innerText = "\n" + label_text;
  element_itself.setAttribute("type", element_type);
}

//create the task form elements!
createFormElement("task_title", "title_input", "Title:", "input", "text");
createFormElement("desc", "desc_input", "desc:", "textarea");
createFormElement("due", "due_input", "Due Date:", "input", "date");
createFormElement(
  "priority",
  "priority_number_input",
  "Priority:",
  "input",
  "number",
);
// optional elements for post-completion: notes, checklist

//define any stragglers for the constructor above
const priority = document.getElementById("priority");
let priority_min = 1;
let priority_max = 3;
priority.setAttribute("min", priority_min);
priority.setAttribute("max", priority_max);

//create task form submit button
let button = document.createElement("button");
button.setAttribute("type", "button");

//add completed form
form.appendChild(button);

//make form submit button
button.innerText = "Submit the info!";
button.style.width = "flex-self";
button.addEventListener("click", () => {
  TaskManager();
  clearInputFields();
});

function clearInputFields() {
  let title = document.getElementById("task_title");
  let desc = document.getElementById("desc");
  let priority = document.getElementById("priority");
  let due = document.getElementById("due");

  title.value = "";
  desc.value = "";
  priority.value = "";
  due.value = "";
}

export function TaskFormToggle() {
  let form = document.getElementById("task_form");

  if (form.style.display == "none") {
    form.style.display = "grid";
  } else {
    form.style.display = "none";
  }
}

export function displaySingleTask(destinationID) {
  // console.log("the due date is", task_list[0].due);
  // title_box.style.border = "none";

  let list = task_list;
  let container = document.getElementById(destinationID);

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let task_box = document.createElement("div");
    task_box.setAttribute("class", "task");

    console.log("We are printing object ", i + 1);
    // console.log("the item is ", task_list[i]);

    console.log("the item we are looking at is: ", list[i]);
    // console.log(list[i].title);
    // console.log(list[i].desc);
    // console.log(list[i].due);
    // console.log(list[i].priority);
    let shortcut = list[i];

    // console.log("shortcut is",shortcut);
    // console.log(shortcut.desc);
    // console.log(list);

    if (
      shortcut.desc == shortcut.priority &&
      shortcut.priority == shortcut.due 
    ) {
      console.log("There is only a title");
      let h3 = document.createElement("h3");
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");

      container.append(task_box);
      task_box.append(checkbox);
      task_box.append(h3);
      h3.innerText = shortcut.title;
    } else {
      console.log("There is a title & others");
      let details = document.createElement("details");
      let summary = document.createElement("summary");
      let h3 = document.createElement("h3");

      let non_titles = [
        shortcut.desc,
        shortcut.priority,
        shortcut.due,
      ];

      non_titles.forEach(function (non) {
        let p = document.createElement("p");
        p.innerText = non;
        details.append(p);
      });

      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");

      container.append(task_box);
      task_box.append(details);
      details.append(summary);
      summary.append(checkbox);
      summary.append(h3);
      h3.innerText = shortcut.title;
    }
  }
}
