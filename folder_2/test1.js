//https://www.codewars.com/kata/5544c7a5cb454edb3c000047
//CodeWars

function bouncingBall(h,  bounce,  window) {
    if(h<=0 || bounce<=0 || bounce>=1 || window>h) return -1;
    let seen =0;
    while(h>window){
      h= bounce*h;
      seen++;
    }
    return seen*2-1;
  }


 console.log(bouncingBall(30.0, 0.66, 1.5));
 console.log(bouncingBall(3.0, 0.66, 1.5));