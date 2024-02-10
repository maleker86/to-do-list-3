export const task_list = [];

  function Task(title, desc, due, priority) {
    this.title = title;
    this.description = desc;
    this.due_date = due;
    this.priority = priority;
  }

  //create it
  let task = new Task();

  //push it
  task_list.unshift(task);

  //test it
  console.log("this task list is ", task_list);