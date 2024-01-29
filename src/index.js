import './style.css';
import { createForm, displayTask } from "./task.js";

createForm();

(function createButton() {
  let form = document.getElementsByTagName("fieldset")[0];
  let button = document.createElement("button");

  form.appendChild(button);

  button.innerText = "Submit the info!";

  button.addEventListener("click", displayTask);

})();
