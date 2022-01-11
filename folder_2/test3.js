//https://www.codewars.com/kata/520b9d2ad5c005041100000f
//CodeWars
function pigIt(str){
    let array = str.split(' ');
    let newStr='';
    array.forEach(el=>{
        if(el.length===1){
            if(el[0].charCodeAt(0)<=65)
                newStr += el+' ';
            else
                newStr +=el.slice(1,) + el[0] + 'ay'+' ';
        }
        else
            newStr = newStr+ el.slice(1,) + el[0] + 'ay'+' ';
    });
    return newStr.trim();
  }

console.log(pigIt('O tempora o mores !'));