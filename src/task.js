export function createForm() {
  function createFieldSet() {
    const form = document.createElement("form");
    const field_set = document.createElement("fieldset");
    const field_legend = document.createElement("legend");
    let h1 = document.createElement("h1");

    document.body.prepend(form);
    form.prepend(h1);
    h1.innerText = "New Task:"
    form.setAttribute("id","form");
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
    // optional elements for post-completion: notes, checklist

    //stragglers for the constructor above
    const priority = document.getElementById("priority");
    const priority_min = 1
    const priority_max = 3;
    priority.setAttribute("min",priority_min);
    priority.setAttribute("max",priority_max);

  }

    createFieldSet();
};

export function displayTask() {
  let title = document.getElementById("title").value;

  console.log("Title is: " + title);

  function createOutputs() {
    (function createTitle() {
      let p = document.createElement("p");

      if (title === "") {
        console.log("I receieve blank input");
        return;
      }

      document.body.appendChild(p);

      p.innerText = title;
    })();
  }

  //make this apply to all!
  function clearInputFields() {
    let inputFields = document.getElementsByTagName("input");

    let i = 0;
    while (i < inputFields.length) {
      console.log("hi  this is an array item!");
      console.log(i.name);
      i++;
    }

    // inputField.value = "";
  }

  createOutputs();
  clearInputFields();

  // const clearField = () => {
  //     title.value = "";
  //   }
};