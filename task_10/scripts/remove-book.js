export function removeBook() {
    let isbnToRemove = prompt("Введите ISBN: ");
    let library = JSON.parse(localStorage.getItem('library')) || [];

    library = library.filter(book => book.ISBN !== isbnToRemove);
    localStorage.setItem('library', JSON.stringify(library));

    location.reload();
}