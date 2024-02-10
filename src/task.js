const task_list = [];
// console.log("the space between functions (global) sees: ",CreateForm.destination);
// console.log("the space between functions (global) sees: ",destination);

function CreateTask(title) {

  // console.log("another function sees: ",CreateForm().destination);
  // console.log("another function sees: ",destination);

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
