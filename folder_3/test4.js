//https://www.codewars.com/kata/52fba66badcd10859f00097e
//CodeWars
function disemvowel(str) {
    let re = /[aeiou]/ig;
    return str.replace(re,'');
  }