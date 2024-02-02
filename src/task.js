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

  createFieldSet();
}

const task_list = [];

export function CreateTask() {
  function Task(title, desc, due, priority) {
    this.title = document.getElementById("title").value;
    this.description = document.getElementById("desc").value;
    this.due_date = document.getElementById("due").value;
    this.priority = document.getElementById("priority").value;
  };

  let task = new Task();

  // console.log("Title is: " + title.value);
  // console.log(task);
  task_list.push(task);

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

function displayTask() {
  // console.log("the due date is", task_list[0].due_date);

  for (let i = 0; i < task_list.length; i++) {
    let container = document.createElement("div");

    document.body.append(container);
    // let p = document.createElement("p");
    //       container.append(p);
    //       p.innerText = i;
    const keys = Object.keys(task_list[i]);
    const values = Object.values(task_list[i]);

    // console.log(keys);
    // console.log(values);
    values.forEach((value) => {
      if(value == "") {
        console.log("This value contains nothing");
      } else {
        console.log(value);
      }
    });

  }
}
  
  
clearInputFields();
displayTask();
};



// function createOutputs() {
//   let task = CreateTask();
//   console.log("the task is ", task);
//   task_list.push(task);
//   console.log("the whole list is: ", task_list);

//   // (function createTitle() {
//   // let p = document.createElement("p");
//   // if (title.value === "") {
//   //   console.log("I received blank input");
//   //   return;
//   // }
//   // document.body.appendChild(p);
//   // p.innerText = title.value;
//   // })();
// }

// //make this apply to all!

// createOutputs();
// clearInputFields();

// // const clearField = () => {
// //     title.value = "";
// //   }