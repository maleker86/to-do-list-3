import _ from "lodash";
// import { loadField, setMessage } from "./task_setter.js";
import { loadField } from "./task_setter.js";

loadField();

(function createButton() {
  let button = document.createElement("button");

  document.body.appendChild(button);

  button.innerText = "Button!";

  button.addEventListener("click", displayMessage);

})();

function displayMessage() {
  let title = document.getElementById("title").value;

  if (title !== "") {
    console.log(title);
  } else {
    console.log("I am not reading it")
  }

//   if (setMessage !== "") {
//     let importedMessage = setMessage().list;
//     // let text = importedMessage.message;

//     importedMessage.forEach(item => {
//         const sentence = document.createElement("p");
//         document.body.append(sentence);
//         sentence.innerText = item;
//     });

//     // console.log(importedMessage.message);
//   } else {
//     console.log("There is no message.");
//   }
// 
};

// displayMessage();