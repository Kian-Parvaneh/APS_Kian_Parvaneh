function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(el=>{
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.textContent = el.name;
    h2.textContent = el.job;
    content.append(h1,h2);
  })
}

let people = [
  { name: "Alireza", job: "Teacher" },
  { name: "Jafar", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
]

listOfNames(people)
