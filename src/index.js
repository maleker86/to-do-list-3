import _ from "lodash";
import setMessage from "./task_setter.js";

function displayMessage() {
  if (setMessage !== "") {
    let importedMessage = setMessage().list;
    // let text = importedMessage.message;

    importedMessage.forEach(item => {
        const sentence = document.createElement("p");
        document.body.append(sentence);
        sentence.innerText = item;
    });

    // console.log(importedMessage.message);
  } else {
    console.log("There is no message.");
  }
};

displayMessage();