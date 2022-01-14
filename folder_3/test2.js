//https://www.codewars.com/kata/546e2562b03326a88e000020
//CodeWars
function squareDigits(num){
    let strNum = num.toString();
    let array = strNum.split('').map(el=>el ** 2);
    let number = array.reduce((total,el)=>{
      total+= el.toString();
      return total;
    },'');
    return Number(number);
  }