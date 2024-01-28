export function loadField() {
    function createField() {
      const field_set = document.createElement("fieldset");
      const field_legend = document.createElement("legend");
      const field_label = document.createElement("label");
      const text_field = document.createElement("input");

      field_legend.innerText = "Task To Do:"

      document.body.append(field_set);
      field_set.appendChild(field_legend);
      field_set.appendChild(field_label);
      field_set.appendChild(text_field);
  
      return text_field;
    }
  
    (function loadTitle() {
      createField();
      let field = document.getElementsByTagName("input")[0];
      let label = document.getElementsByTagName("label")[0];

      field.setAttribute("id", "title_box");
      field.setAttribute("type", "text");
      field.setAttribute("label", "title");

      label.innerText = "Task title: ";
      label.setAttribute("for", "title_box");
      
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
  