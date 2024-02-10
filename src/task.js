export const task_list = [];

  function Task(title, desc, due, priority) {
    this.title = document.getElementById("title").value;
    this.description = document.getElementById("desc").value;
    this.due_date = document.getElementById("due").value;
    this.priority = document.getElementById("priority").value;
  }

  //create it
  let task = new Task();

  //push it
  task_list.unshift(task);

  //test it
  console.log("this task list is ", task_list);