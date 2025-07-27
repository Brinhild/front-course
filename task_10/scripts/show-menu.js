import {addBook} from "./add-book.js";
import {findBook} from "./find-book.js";
import {removeBook} from "./remove-book.js";

document.getElementById('actionsButton').addEventListener('click', showMenu);
function showMenu() {

    const numberOfAction = prompt("What do you want to do? \n" +
        "Add Book - press 1 \n" +
        "Find Book - press 2 \n" +
        "Remove Book - press 3 \n" +
        "ShowLibrary - press 4 \n" +
        "Exit - press 0 ");


    switch (numberOfAction) {
        case '0':
            break;
        case '1':
            addBook();
            break;
        case '2':
            findBook();
            break;
        case '3':
            removeBook();
            break;
        case '4':
            location.reload();
            break;
        default:
            alert("Некорректный ввод.");
    }
}