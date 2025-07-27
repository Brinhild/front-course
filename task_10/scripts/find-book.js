export function findBook() {
    let isbnToFind = prompt("Введите ISBN: ");
    const library = JSON.parse(localStorage.getItem('library')) || [];
    const books = library.filter(book => book.ISBN === isbnToFind);
    const list = document.getElementById('book-list');

    if (books.length > 0) {
        books.forEach(book => {
            list.textContent = `Найдена книга: ${book.name} — ${book.author} (${book.year})`;
        })
    } else {
        list.textContent = 'Книга с таким ISBN не найдена.';
    }
}
