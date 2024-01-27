export function loadField() {
    function createField() {
      const text_field = document.createElement("input");
      const field_set = document.createElement("fieldset");
      const field_label = document.createElement("label");

      field_label.innerText = "Task title: ";
      field_label.setAttribute("for", "title_box");
      text_field.setAttribute("type", "text");
      text_field.setAttribute("label", "title");

      document.body.append(field_set);
      field_set.appendChild(field_label);
      field_set.appendChild(text_field);
  
      return text_field;
    }
  
    (function loadTitle() {
      createField();
      let field = document.getElementsByTagName("input")[0];
      field.setAttribute("id", "title_box");
    })();
  }
  
  export function displayField() {
    let title = document.getElementById("title_box").value;
  
    if (title !== "") {
      console.log(title);
    //   title.value = "";
    } else {
      console.log("I am not reading it");
    }
  
    // const clearField = () => {
    //     title.value = "";
    //   }
  }
  