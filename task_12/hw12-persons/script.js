const persons = [];
const addPerson = document.getElementById('add-person');
const list = document.getElementById('persons-list');
const totalPerson = document.getElementById('total-persons');

addPerson.onclick = function () {
    const personId = document.getElementById('person-id').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = document.getElementById('age').value;

    if (!personId || !firstName || !lastName || !age) {
        alert('Please complete all fields.');
        return;
    }

    if (findPersonById(persons, personId) >= 0) {
        alert('Id must be unique.')
    } else {
        const person = new Person(personId, firstName, lastName, age);
        persons.push(person);
        renderPerson(persons);
    }

    document.getElementById('person-id').value = '';
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('age').value = '';
}

function createButtonDel(id) {
    const buttonDel = document.createElement('button');
    buttonDel.append('X');
    buttonDel.style.color = 'red';
    buttonDel.style.marginLeft = '5px';

    buttonDel.addEventListener('click', () => {
        deletePerson(id);
    });

    return buttonDel;
}

function deletePerson(id) {
    const findResult = findPersonById(persons, id);

    if (findResult >= 0) {
        persons.splice(findResult, 1);
        renderPerson(persons);
    } else {
        alert('No such person was found.');
    }
}

function findPersonById(arr, id) {
    id = String(id);
    for (let i = 0; i < arr.length; i++) {
        if (String(arr[i].id) === id) {
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

function renderPerson(persons) {
    list.textContent = '';
    persons.forEach(person => {
        const li = document.createElement('li');
        li.textContent = `${person.id} — ${person.firstName}, ${person.lastName}, age: ${person.age}`;
        li.appendChild(createButtonDel(person.id));
        list.appendChild(li);

    })

    totalPerson.textContent = 'Total persons: ' + persons.length;
}
