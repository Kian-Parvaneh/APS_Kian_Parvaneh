//https://www.codewars.com/kata/52597aa56021e91c93000cb0
//CodeWars
var moveZeros = function (arr) {
    let newarr =[];
    for(let i=0;i<arr.length;i++){
      if(typeof arr[i] == 'boolean' || arr[i]== null)
        newarr.push(arr[i]);
      else if(arr[i].toString().charCodeAt(0)!=48)
        newarr.push(arr[i]);
    }
    let zeros = arr.length - newarr.length;
    for(let i=0;i<zeros;i++)
        newarr.push(0);
    return newarr;
  }

console.log(moveZeros([false,1,0,1,2,0,1,3,"a",null]));

console.log(moveZeros([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]));