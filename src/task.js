export function createForm() {
  function createFieldSet() {
    const form = document.createElement("form");
    const field_set = document.createElement("fieldset");
    const field_legend = document.createElement("legend");
    let h1 = document.createElement("h1");

    document.body.prepend(form);
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
    button.addEventListener("click", CreateTask);
    button.addEventListener("click", clearInputFields)
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

  // console.log("Title is: " + title.value);
  // console.log(task);

  console.log("the array is:", task);
  console.log(`the title is ${task.title}`);

  if (task.title == "") {
    logError();
    return;
  }

  function logError() {
    console.log("Please add a title to continue!");
  }

    task_list.unshift(task);

    console.log("this task list is ", task_list); 


  function displayTask() {
    // console.log("the due date is", task_list[0].due_date);

    container.innerHTML = "";

    for (let i = 0; i < task_list.length; i++) {
      let container = document.getElementById("container");
      let task_box = document.createElement("div");

      console.log("We found ", i + 1, " object(s)");
      console.log("the item is ", task_list[i]);

      //clear previous inputs so they do not duplicate!

      const values = Object.values(task_list[i]);
      const keys = Object.keys(task_list[i]);

      // console.log("values are", values);
      // console.log("the 1st value itself is:", values[0]);
      // console.log("keys are", keys);
      // console.log("the 1st key itself is:", keys[0]); 

      container.append(task_box);
      task_box.classList.add("task");

      // let p = document.createElement("p");
      //       container.append(p);
      //       p.innerText = i;
      // const keys = Object.keys(task_list[i]);

      // console.log(keys);
      // console.log(values);

      // values.forEach((value) => {
      //   console.log(value);
      //   let p = document.createElement("p");
      //   task_box.append(p);
      //   p.innerText = value;
      // });

      for (let i = 0; i < values.length; i++) {
        // console.log("value is", values[i]);
        let p = document.createElement("p");
        let h2 = document.createElement("h2");
        if (keys[i] == "title") {
          task_box.append(h2);
          h2.setAttribute("class",keys[i]);
          h2.innerText = values[i];
        } else {
        task_box.append(p);
        // console.log("This is from the item called:", keys[i]);
        p.setAttribute("class",keys[i]);
        p.innerText = values[i];
        }
      }
    }
  }

  displayTask();
}
