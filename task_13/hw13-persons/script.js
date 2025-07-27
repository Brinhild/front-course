const persons = [];

addPerson.onclick = function () {
    //TODO Person must be unique. add person to list with ButtonDel.
    // If person added, total will be increment
    // If person removed, total will be decrement
    // functionality with remove is optional
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
    // TODO Homework: if persons not empty, show in <div id="stats"> after <h2>
    // Total persons, max age, min age, average age
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