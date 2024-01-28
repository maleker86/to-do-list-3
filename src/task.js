export function createForm() {
  function createFields() {
    const field_set = document.createElement("fieldset");
    const field_legend = document.createElement("legend");
    const field_label = document.createElement("label");
    const text_field = document.createElement("input");

    field_legend.innerText = "Task To Do:";

    document.body.append(field_set);
    field_set.appendChild(field_legend);
    field_set.appendChild(field_label);
    field_set.appendChild(text_field);
  };

  function loadTitleField() {
    let field = document.getElementsByTagName("input")[0];
    let label = document.getElementsByTagName("label")[0];

    field.setAttribute("id", "title_box");
    field.setAttribute("type", "text");
    field.setAttribute("label", "title");

    label.innerText = "Task title: ";
    label.setAttribute("for", "title_box");
  };

  createFields();
  loadTitleField();
}

export function displayTask() {
  let title = document.getElementById("title_box").value;

  function createOutputs() {
    function createTitle() {
      let p = document.createElement("p");

      if (title === "") {
        console.log("I receieve blank input");
        return;
      } 

      document.body.appendChild(p);
  
      return p;
    }

    let title_slot = createTitle();

    function assignTitle() {
      let title_output = title_slot;
      title_output.innerText = title; 
    }

    function clearInputField() {
      let inputField = document.getElementById("title_box");
      inputField.value = "";
    }

    assignTitle();
    clearInputField();
  }

  createOutputs();
  // displayTitle();

  // const clearField = () => {
  //     title.value = "";
  //   }
}
