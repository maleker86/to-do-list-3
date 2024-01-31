export function createForm() {
  function createFieldSet() {
    const form = document.createElement("form");
    const field_set = document.createElement("fieldset");
    const field_legend = document.createElement("legend");
    let h1 = document.createElement("h1");

    document.body.append(form);
    form.prepend(h1);
    h1.innerText = "New Task:"
    // form.appendChild(field_set);
    // field_set.appendChild(field_legend);
    // field_legend.innerText = "Task:";


    // create anything
    function createFormElement(item_id, name, label_text, element_tag, element_type) {
      const field_label = document.createElement("label");
      const element_itself = document.createElement(element_tag);

      form.appendChild(field_label);
      form.appendChild(element_itself);

      element_itself.setAttribute("id", item_id);
      element_itself.setAttribute("name", name);
      element_itself.setAttribute("label", label_text);
      field_label.innerText = '\n' + label_text;
      element_itself.setAttribute("type", element_type);

    }

    createFormElement("title","title_input","Title:","input","text");
    createFormElement("desc","description_input","Description:","textarea");
    createFormElement("due","due_date_input","Due Date:","input","date");
    createFormElement("priority","priority_number_input","Priority:","input","number");

    console.log(priority);

    //stragglers
    
    const priority = document.getElementById("priority");
    const priority_min = 1
    const priority_max = 3;
    priority.setAttribute("min",priority_min);
    priority.setAttribute("max",priority_max);

  }

  // let form_element_count = 2;
  // for (let i = 0; i < form_element_count; i++) {
  //   const field_label = document.createElement("label");
  //   const text_field = document.createElement("input");

  //   field_set.appendChild(field_label);
  //   field_set.appendChild(text_field);
  // }


    createFieldSet();
    // loadTitleField();
}

// function loadTitleField() {
//   createFormElement()
//   // let field = document.getElementsByTagName("input")[0];
//   // let label = document.getElementsByTagName("label")[0];

//   // label.innerText = "Task title: ";
//   // label.setAttribute("for", "title_box");
// }

// function loadDescField() {
//   let field = document.getElementsByTagName("input")[1];
//   let label = document.getElementsByTagName("label")[1];

//   field.setAttribute("id", "desc_box");
//   field.setAttribute("type", "textarea");
//   field.setAttribute("label", "desc");

//   label.innerText = "Task desc: ";
//   label.setAttribute("for", "desc_box");
// }

// loadDescField();

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

    function assignTitle() {
      let title_slot = createTitle();
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
