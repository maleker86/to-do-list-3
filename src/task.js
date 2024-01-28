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

  function loadTitle() {
    let field = document.getElementsByTagName("input")[0];
    let label = document.getElementsByTagName("label")[0];

    field.setAttribute("id", "title_box");
    field.setAttribute("type", "text");
    field.setAttribute("label", "title");

    label.innerText = "Task title: ";
    label.setAttribute("for", "title_box");
  };

  createFields();
  loadTitle();
}

export function displayField() {
  let title = document.getElementById("title_box").value;

  if (title !== "") {
    console.log(title);
    //   title.value = "";
  } else {
    console.log("I receieve blank input");
  }

  function createOutputs() {
    let p = document.createElement("p");
    document.body.appendChild(p);

    let title_output = p;
    title_output.innerText = title; 
  }

  createOutputs();
  // displayTitle();

  // const clearField = () => {
  //     title.value = "";
  //   }
}
