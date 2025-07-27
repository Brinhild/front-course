const persons = [];

addPerson.onclick = function () {
    const person = new Person(personId.value.trim(),
        firstName.value.trim(),
        lastName.value.trim(),
        age.value);
    if (findPersonById(persons, person.id) >= 0) {
        alert(`Person with id=${person.id} exists`);
        return;
    }
    persons.push(person);
    const li = document.createElement('li');
    const buttonDel = createButtonDel();
    li.append(person.toString(), buttonDel);
    buttonDel.addEventListener('click', () => {
        const index = findPersonById(persons, person.id);
        persons.splice(index, 1);
        showStats();
    })
    personsList.append(li);
    showStats();
    personId.value = firstName.value = lastName.value = age.value = '';
}

function showStats() {

    const stats = document.getElementById('stats');

    if (persons.length === 0) {
        while (stats.children.length > 1) {
            stats.removeChild(stats.lastChild);
        }
        return;
    }

    const totalPersons = persons.length;
    const ages = persons.map(p => p.age);
    const maxAge = Math.max(...ages);
    const minAge = Math.min(...ages);
    const averageAge = (ages.reduce((sum, age) => sum + age, 0) / totalPersons).toFixed(2);

    const statsHtml = `
        <p>Total persons: ${totalPersons}</p>
        <p>Max age: ${maxAge}</p>
        <p>Min age: ${minAge}</p>
        <p>Average age: ${averageAge}</p>
    `;

    while (stats.children.length > 1) {
        stats.removeChild(stats.lastChild);
    }

    stats.insertAdjacentHTML('beforeend', statsHtml);
}


function findPersonById(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return i;
        }
    }
    return -1;
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.toString = function () {
        return `ID: ${this.id}, name: ${this.firstName}, lastName: ${this.lastName},
                age: ${this.age}`;
    }
}