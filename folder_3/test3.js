//https://www.codewars.com/kata/54ff3102c1bad923760001f3
//CodeWars
function getCount(str) {
    var vowelsCount = 0;
    for(let i=0;i<str.length;i++){
      switch(str[i]){
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u': vowelsCount++;
      }
    }
    return vowelsCount;
  }