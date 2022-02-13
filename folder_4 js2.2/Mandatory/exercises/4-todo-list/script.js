function todoList(todos) {
  const ul = document.createElement('ul');
  document.clas
  for(let i = 0 ; i<todos.length ; i++){
    const li = document.createElement('li');
    li.textContent = todos[i].todo;
    li.classList.add('line-through');
    li.addEventListener('click',function(e){
      if(e.target.style.textDecoration === 'none'){
        e.target.style.textDecoration = 'line-through';
        console.log(e);
      }
      else
        e.target.style.textDecoration = 'none';
      
      //e.target.classList.toggle("line-through");
      
    })
    ul.appendChild(li);
  }
  document.querySelector('#content').appendChild(ul);
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);