export function loadField() {
    function createField() {
        const text_field = document.createElement("input");
        text_field.setAttribute("type", "text");

        document.body.appendChild(text_field);

        return text_field;
    }

    (function loadTitle() {
        createField()
        let field = document.getElementsByTagName("input")[0];
        field.setAttribute("id", "title");
    })();


    // return text_field;
};

// export function setMessage() {
//     // let title = window.prompt("What do you want the title to be?");

//     // let desc = window.prompt("What do you want the desc to be?");
//     // let dueDate = window.prompt("What do you want the due Date to be?");
//     // let priority = window.prompt("What do you want the priority to be? Use 1-3");

//     // let title = loadField.value;

//     const list = [];
//     list.push(title);
//     list.push(desc);
//     list.push(dueDate);
//     list.push(priority);

//     // console.log(message);

//     return {
//         list,
//     }
// };
