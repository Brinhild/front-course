let library = JSON.parse(localStorage.getItem('library')) || [];
document.getElementById('actionsButton').addEventListener('click', showMenu);

if (!localStorage.getItem('library')) {
    initializeLibrary();
}

function initializeLibrary() {
    const initialBooks = [
        {name: "Война и мир", author: "Лев Толстой", year: 1869, ISBN: "9781234567897"},
        {name: "Преступление и наказание", author: "Фёдор Достоевский", year: 1866, ISBN: "9789876543210"}
    ];

    localStorage.setItem('library', JSON.stringify(initialBooks));
}

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
            console.log("Некорректный ввод.");
    }
}

function addBook() {
    let item = {
        name: prompt("Наименование книги?"),
        author: prompt("Имя автора?"),
        year: prompt("Год издания?"),
        ISBN: generateISBN10(),
    };

    saveLibrary(item);
    renderLibrary();
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

function renderLibrary() {
    const list = document.getElementById('book-list');
    list.innerHTML = '';

    library.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.name} — ${book.author}, ${book.year} г. ISBN: ${book.ISBN}`;
        list.appendChild(li);
    });
}

function removeBook() {
    let isbnToRemove = prompt("Введите ISBN: ");
    let library = JSON.parse(localStorage.getItem('library')) || [];

    library = library.filter(book => book.ISBN !== isbnToRemove);
    localStorage.setItem('library', JSON.stringify(library));

    location.reload();
}

// function findBook() {
//     let isbnToFind = prompt("Введите ISBN: ");
//     const library = JSON.parse(localStorage.getItem('library')) || [];
//
//     const book = library.filter(book => book.ISBN === isbnToFind);
//
//     const list = document.getElementById('book-list');
//     list.innerHTML = '';
//
//     if (book) {
//         list.textContent = `Найдена книга: ${book.name} — ${book.author} (${book.year})`;
//     } else {
//         list.textContent = 'Книга с таким ISBN не найдена.';
//     }
// }

