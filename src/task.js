export function createTaskHolder() {
  let task_container = document.createElement("div");
  let main = document.getElementById("main");
  task_container.setAttribute("id", "container");

  main.append(task_container);
}

export function createForm() {
  function createFieldSet() {
    const form = document.createElement("form");
    const field_set = document.createElement("fieldset");
    const field_legend = document.createElement("legend");
    let h1 = document.createElement("h1");

    document.body.prepend(form);
    form.style.display = "grid";
    form.prepend(h1);
    h1.innerText = "New Task:";
    form.setAttribute("id", "form");
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

    createFormElement("title", "title_input", "Title:", "input", "text");
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
  }

  function createSubmitButton() {
    let button = document.createElement("button");
    button.setAttribute("type", "button");

    form.appendChild(button);

    button.innerText = "Submit the info!";
    button.style.width = "flex-self";
    button.addEventListener("click", CreateTask);
    // button.addEventListener("click", clearInputFields);
  }

  function clearInputFields() {
    let title = document.getElementById("title");
    let desc = document.getElementById("desc");
    let priority = document.getElementById("priority");
    let due = document.getElementById("due");

    title.value = "";
    desc.value = "";
    priority.value = "";
    due.value = "";
  }

  createFieldSet();
  createSubmitButton();
}

const task_list = [];

function CreateTask() {

  function Task(title, desc, due, priority) {
    this.title = document.getElementById("title").value;
    this.description = document.getElementById("desc").value;
    this.due_date = document.getElementById("due").value;
    this.priority = document.getElementById("priority").value;
  }

  let task = new Task();

  let title_box = document.getElementById("title");

  // console.log("Title is: " + title.value);
  // console.log(task);

  // console.log("the array is:", task);
  // console.log(`the title is ${task.title}`);

  if (task.title == "") {
    logError();
    return;
  }

  function logError() {
    console.log("Please add a title to continue!");
    title_box.style.border = "2px solid red";
  }

  form.remove();

  task_list.unshift(task);

  console.log("this task list is ", task_list);

  function displayTask() {
    // console.log("the due date is", task_list[0].due_date);

    title_box.style.border = "none";

    container.innerHTML = "";

    for (let i = 0; i < task_list.length; i++) {
      let container = document.getElementById("container");
      let task_box = document.createElement("div");
      task_box.setAttribute("class","task");

      console.log("We are printing object ", i + 1);
      // console.log("the item is ", task_list[i]);


      console.log("the items in the list are: ", task_list[i]);
      // console.log(task_list[i].title);
      // console.log(task_list[i].description);
      // console.log(task_list[i].priority);
      // console.log(task_list[i].due_date);
      let shortcut = task_list[i];

      console.log(shortcut);

      if (shortcut.description == shortcut.priority && shortcut.priority == shortcut.due_date) {
        console.log("There is only a title");
        let h3 = document.createElement("h3");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        
        container.append(task_box);
        task_box.append(checkbox);
        task_box.append(h3);
        h3.innerText = shortcut.title;

      } else {
        console.log("There is a title & others");
        let details = document.createElement("details");
        let summary = document.createElement("summary");
        let h3 = document.createElement("h3");

        let non_titles = [shortcut.description, shortcut.priority, shortcut.due_date];

        non_titles.forEach(function(non) {
          let p = document.createElement("p");
          p.innerText = non;
          details.append(p);
        })

       

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        
        container.append(task_box);
        task_box.append(details);
        details.append(summary);
        summary.append(checkbox);
        summary.append(h3);
        h3.innerText = shortcut.title;



      }
     
    }
  }

  displayTask();
}
