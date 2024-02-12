export let task_list = [];

  function Task(title, desc, due, priority) {
    this.title = title;
    this.description = desc;
    this.due_date = due;
    this.priority = priority;
  }

  export function createTask(title, desc, due, priority) {
      //create it
      let task = new Task(title, desc, due, priority);

      //push it
      let push = task_list.unshift(task);
      let hello = console.log(
        "I have been hello'd!",
      )
  }