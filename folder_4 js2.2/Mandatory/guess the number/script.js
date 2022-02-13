let randomNumber = Math.floor(Math.random() * 100 + 1);
document.body.style.backgroundImage = 'url(leaves.jpeg)';
document.body.style.backgroundSize = 'cover';
console.log(randomNumber);
let attempt = 0;
let lose = false;
let win = false;
function guessNumber() {
  
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if((guess==='' || guess<1 || guess>100) && !win && !lose)
    document.querySelector('.final-output').textContent = 'Please enter a number between 1 and 100';
  else if(!win){
    attempt++;
    // if(attempt===10){
    //   lose = true;
    // }
    
    if(attempt<10){
      document.querySelector(".inputs-Values").value = ''; 
      document.querySelector('.Tries-output').textContent = 'Tries: ' + attempt;
      if(guess>randomNumber){
        document.querySelector('.final-output').textContent = ' Number is too high, try again';

      }
      else if(guess<randomNumber){
        document.querySelector('.final-output').textContent = 'Number is too low, try again';
      }
      else{
        document.querySelector('.final-output').textContent = 'Guess is correct. You win!'
        win = true;
      }

    }
    else{
      document.querySelector('.final-output').textContent ='You Lose, the number was ' + randomNumber;
      document.querySelector('.Tries-output').textContent = 10;
      lose = true;
    }
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  attempt = 0;
  win = false;
  document.querySelector('.final-output').textContent ='Guess a number between 1 and 100';
  document.querySelector('.Tries-output').textContent = '';
  document.querySelector(".inputs-Values").value = ''; 
  console.log(randomNumber);
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}
document.querySelector('.btnNewGame').addEventListener('click',newGame);
//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
