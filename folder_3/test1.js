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