import _ from "lodash";
import { createForm, displayField } from "./task.js";

createForm();

(function createButton() {
  let button = document.createElement("button");

  document.body.appendChild(button);

  button.innerText = "Submit the info!";

  button.addEventListener("click", displayField);

})();
