function readingList(books) {
  const content = document.querySelector('#content');
  const ul = document.createElement('ul');
  let counter=0;
  books.forEach(el => {
    const p = document.createElement('p');
    const li = document.createElement('li');
    p.textContent = el.title+' '+ el.author;
    li.append(p);
    const img = document.createElement('img');
    img.src = links[counter];
    counter++;
    // if(el.alreadyRead){
    //   li.style.backgroundColor = 'green';
    // }
    // else{
    //   li.style.backgroundColor = 'red';
    // }
    li.style.backgroundColor = el.alreadyRead ? 'green':'red';
    li.append(img);
    ul.append(li);
    ul.style.listStyleType = 'none';
  });
  content.append(ul);
}

const links = ['1.jpg', '2.jpg','3.jpg'];

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
]

readingList(books)
