function shoppingList(arrayOfPeople) {
  const content = document.querySelector('#content');
  const ul = document.createElement('ul');
  for(const el of arrayOfPeople){
    const li = document.createElement('li');
    li.textContent = el;
    ul.appendChild(li);
  }
  content.appendChild(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"]

shoppingList(shopping)
