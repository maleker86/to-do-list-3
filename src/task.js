import { task_list, hello } from "./storage.js";

const tasks  = (function () {

  //define it
  function Task(title, desc, due, priority) {
    this.title = title;
    this.description = desc;
    this.due_date = due;
    this.priority = priority;
  }

  const create = () => {
    let task = new Task(title, desc, due, priority);
    return task;
  }


  const push = () => {
    task_list.unshift(create);
    hello();
  }

  return {
    create,
    push,
  }
});

export default tasks;