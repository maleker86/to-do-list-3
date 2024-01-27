import _ from "lodash";
// import { loadField, setMessage } from "./task.js";
import { loadField, displayField } from "./task.js";

loadField();

(function createButton() {
  let button = document.createElement("button");

  document.body.appendChild(button);

  button.innerText = "Submit the info!";

  button.addEventListener("click", displayField);

})();
