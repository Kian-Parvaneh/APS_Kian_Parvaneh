//https://www.codewars.com/kata/5254ca2719453dcc0b00027d
//CodeWars
function permutations(string) {
    if (string.length<=1)
        return [string];
    let array = [];
    for (let i = 0; i < string.length; i++){
        let c=string[i];
        if (string.indexOf(c)!=i) {
            continue;
        }
        let str =string.slice(0,i)+string.slice(i+1,string.length);
        for (let el of permutations(str)){
            array.push(c+el);
        }
    }
  //console.log(array);
    return array;
}