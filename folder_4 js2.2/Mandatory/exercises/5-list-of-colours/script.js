// const content = document.querySelector('#content');
// const form = document.createElement('form');
// content.append(form);
// const label = document.createElement('label');
// label.setAttribute('for','color');
// label.innerText = 'select Your Color: ';
// const select = document.createElement('select');
// select.setAttribute('id','color');
// const btn = document.createElement('button');
// btn.innerText = 'Submit!';
// form.append(label,select,btn);
// function listOfColours(colours) {
//   colours.forEach(el=>{
//     const option = document.createElement('option');
//     option.setAttribute('value',el);
//     select.append(option);
//   });
// }
// form.addEventListener('submit',function(el){
//   el.preventDefault();
//   const p = document.createElement('p');
//   p.innerText = 'click to change the background color to '+select.value;
//   content.append(p);
//   p.addEventListener('click',function(){
//     document.body.style.backgroundColor = select.value;
//   })
// })
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);



function listOfColours(colours) {
  const div = document.querySelector('#content');
  div.style.margin=  '0 auto';
  div.style.width = '100px';
  const select = document.createElement('select');
  const option = document.createElement('option');
  option.textContent = 'white';
  select.appendChild(option);

  for(const color of colours){
    const option = document.createElement('option');
    option.textContent = color;
    select.appendChild(option);
  }

  select.addEventListener('change',function(e){
    console.log(e.target.value);
    switch(e.target.value){
      case 'red' : e.target.style.backgroundColor = 'red';
        document.body.style.backgroundColor = 'red';break;

      case 'blue' : e.target.style.backgroundColor = 'blue';
        document.body.style.backgroundColor = 'blue';break;

      case 'green' : e.target.style.backgroundColor = 'green';
        document.body.style.backgroundColor = 'green';break;

      case 'yellow' : e.target.style.backgroundColor = 'yellow';
        document.body.style.backgroundColor = 'yellow';break;

      case 'pink' : e.target.style.backgroundColor = 'pink';
        document.body.style.backgroundColor = 'pink';break;

      case 'brown' : e.target.style.backgroundColor = 'brown';
        document.body.style.backgroundColor = 'brown';break;
      default : document.body.style.backgroundColor = 'white';
        e.target.style.backgroundColor = 'white';
    }
  })
  div.appendChild(select);

}