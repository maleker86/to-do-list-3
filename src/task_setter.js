export default function setMessage() {
    let title = window.prompt("What do you want the title to be?");

    let desc = window.prompt("What do you want the desc to be?");
    let dueDate = window.prompt("What do you want the due Date to be?");
    let priority = window.prompt("What do you want the priority to be? Use 1-3");

    const list = [];
    list.push(title);
    list.push(desc);
    list.push(dueDate);
    list.push(priority);

    // console.log(message);

    return {
        list,
    }
};