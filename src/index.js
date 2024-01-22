import _ from "lodash";
import setMessage from "./task_setter.js";

function displayMessage() {
  if (setMessage !== "") {
    // const sentence = document.createElement("p");
    let importedMessage = setMessage("Hello there");

    // document.body.append(sentence);
    // sentence.innerText = importedMessage;
    console.log(importedMessage.message);
  } else {
    console.log("There is no message.");
  }
};

displayMessage();