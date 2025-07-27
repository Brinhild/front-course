export function renderLibrary(library) {
    const list = document.getElementById('book-list');
    list.innerHTML = '';

    library.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.name} — ${book.author}, ${book.year} г. ISBN: ${book.ISBN}`;
        list.appendChild(li);
    });
}