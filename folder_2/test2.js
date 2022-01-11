function findMissingLetter(array){
    let letter;
    array.reduce((el1,el2)=>{
      if(el1.charCodeAt(0)+2 === el2.charCodeAt(0)){
        letter = el1.charCodeAt(0)+1;
      }
      return el2;
    });
    return String.fromCharCode(letter);
    
  }

console.log(findMissingLetter(['O','Q','R','S']));