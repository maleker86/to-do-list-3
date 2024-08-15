import { task_list, hello } from "./storage.js";

const tasks  = (function () {

  //define it
  function Task(title, desc, due, priority) {
    this.title = title;
    this.description = desc;
    this.due_date = due;
    this.priority = priority;
  }

  const create = (title,desc,due,priority) => {
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

console.log("The type of tasks is:", typeof tasks);

//learning 
function PrintHandler() {
  let shout = () => console.log("I am shouting");
  let whisper = () => console.log("I am whispering");
  return {
  shout,
  whisper,
};
}
PrintHandler().shout() 

export default tasks;