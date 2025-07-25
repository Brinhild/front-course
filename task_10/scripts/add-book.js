import {renderLibrary} from "./render.js";

let library = JSON.parse(localStorage.getItem('library')) || [];

export function addBook() {
    let item = getBookName();

    saveLibrary(item);
    let library = JSON.parse(localStorage.getItem('library')) || [];

    renderLibrary(library);
}

function getBookName() {
    return {
        name: prompt("Наименование книги?"),
        author: prompt("Имя автора?"),
        year: prompt("Год издания?"),
        ISBN: generateISBN10(),
    }
}

function saveLibrary(item) {
    library.push(item)
    localStorage.setItem('library', JSON.stringify(library));
}

function generateISBN10() {
    let core = '';
    for (let i = 0; i < 9; i++) {
        core += Math.floor(Math.random() * 10);
    }

    const checkDigit = calculateISBN10CheckDigit(core);
    return core + checkDigit;
}

function calculateISBN10CheckDigit(number9) {
    let sum = 0;
    for (let i = 0; i < number9.length; i++) {
        sum += (i + 1) * parseInt(number9[i]);
    }
    const remainder = sum % 11;
    return remainder === 10 ? 'X' : remainder;
}