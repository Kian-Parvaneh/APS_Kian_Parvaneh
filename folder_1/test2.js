//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
//CodeWars

snail = function (array) {
  //console.log(array[0].length);

  let arr = [];
  if (array[0].length === 1) {
    arr.push(array[0][0]);
    return arr;
  }
  let i = 0,
    j = 0,
    len = array[0].length;
  let repeat = Math.floor(len - 2);
  let m = 0;
  while (repeat >= 0) {
    for (j; j < len - m; j++) {
      arr.push(array[i][j]);
    }
    i++;
    j--;
    for (i; i < len - m; i++) {
      arr.push(array[i][j]);
    }
    i--;
    j--;
    for (j; j >= m; j--) {
      arr.push(array[i][j]);
    }
    j++;
    i--;
    for (i; i > m; i--) {
      arr.push(array[i][j]);
    }
    i++;
    j++;
    m++;
    repeat--;
  }
  if (m === 1 && len === 3) arr.push(array[i][j]);

  console.log(arr);
  return arr;
};
