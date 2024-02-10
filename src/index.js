import "./style.css";
import { AddTask } from "./task.js";

//create a blank page!
  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");
  const task_button = document.createElement("button");

  document.body.append(header);
  document.body.append(main);
  document.body.append(footer);
  header.setAttribute("id", "header");
  main.setAttribute("id", "main");
  footer.setAttribute("id", "footer");

  header.append(task_button);
  task_button.addEventListener("click", TaskFormToggle);
  // task_button.addEventListener("click",function(){console.log(this.parentNode)});
  task_button.setAttribute("grid-area", "header");
  task_button.innerText = "Add Task";

//make task holder on main section
  let task_container = document.createElement("div");
  task_container.setAttribute("id", "task_container");

  main.append(task_container);

//create Form
    //create Fieldsets
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

    // form.appendChild(field_set);
    // field_set.appendChild(field_legend);
    // field_legend.innerText = "Task:";

    // create anything
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
    createFormElement("desc", "description_input", "Description:", "textarea");
    createFormElement("due", "due_date_input", "Due Date:", "input", "date");
    createFormElement(
      "priority",
      "priority_number_input",
      "Priority:",
      "input",
      "number",
    );
    // optional elements for post-completion: notes, checklist

    //stragglers for the constructor above
    const priority = document.getElementById("priority");
    const priority_min = 1;
    const priority_max = 3;
    priority.setAttribute("min", priority_min);
    priority.setAttribute("max", priority_max);
  

  //create task form submit button
    let button = document.createElement("button");
    button.setAttribute("type", "button");

    form.appendChild(button);

    button.innerText = "Submit the info!";
    button.style.width = "flex-self";
    button.addEventListener("click", () => {
        createTask(); 
        clearInputFields();
        TaskFormToggle();
    } );
    // button.addEventListener("click", clearInputFields);
  

  function createTask() {
    let task_title = document.getElementById("task_title").value;

    if (task_title == "") {
        console.log("lol quit it");
    }

    task_title.AddTask;
  }

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

function TaskFormToggle() {
    let form = document.getElementById("task_form");

    if (form.style.display == "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    };
}
