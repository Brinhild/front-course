import {renderLibrary} from "./render.js";

if (!localStorage.getItem('library')) {
    initializeLibrary();
}

function initializeLibrary() {
    const initialBooks = [
        {name: "Хоббит, или Туда и обратно", author: "Дж. Р. Р. Толкин", year: 1937, ISBN: "9785905879442"},
        {name: "Властелин колец: Братство Кольца", author: "Дж. Р. Р. Толкин", year: 1954, ISBN: "9785905879466"},
        {name: "Властелин колец: Две крепости", author: "Дж. Р. Р. Толкин", year: 1954, ISBN: "9785905879473"},
        {name: "Властелин колец: Возвращение короля", author: "Дж. Р. Р. Толкин", year: 1955, ISBN: "9785905879480"},
        {name: "Сильмариллион", author: "Дж. Р. Р. Толкин", year: 1977, ISBN: "9785905879459"},
        {name: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", year: 1997, ISBN: "9785907610050"},
        {name: "Гарри Поттер и Тайная комната", author: "Дж. К. Роулинг", year: 1998, ISBN: "9785907610067"},
        {name: "Гарри Поттер и узник Азкабана", author: "Дж. К. Роулинг", year: 1999, ISBN: "9785907610074"},
        {name: "Гарри Поттер и Кубок огня", author: "Дж. К. Роулинг", year: 2000, ISBN: "9785907610081"},
        {name: "Гарри Поттер и Орден Феникса", author: "Дж. К. Роулинг", year: 2003, ISBN: "9785907610098"},
        {name: "Гарри Поттер и Принц-полукровка", author: "Дж. К. Роулинг", year: 2005, ISBN: "9785907610104"},
        {name: "Гарри Поттер и Дары Смерти", author: "Дж. К. Роулинг", year: 2007, ISBN: "9785907610111"}

    ];

    localStorage.setItem('library', JSON.stringify(initialBooks));

    let library = JSON.parse(localStorage.getItem('library')) || [];

    renderLibrary(library);
}