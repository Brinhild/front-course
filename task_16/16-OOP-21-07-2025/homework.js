let group = {
    title: "Cohort 65",
    students: ["Tatyana", "Anastasia", "Anastasiia", "Daria", "Galina", "Oksana", "Irina"],
    showList: function () {
        const show = (name) =>  {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}
console.log(group);
//Unmodifiable
group.showList();
const newGroup = group;
group = null
console.log("===========")
newGroup.showList();
