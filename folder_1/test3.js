//https://www.codewars.com/kata/541c8630095125aba6000c00
//CodeWars

function digital_root(n) {
    n = (n+'').split('');

    while(true){
        n=n.reduce((sum,num)=>{
            console.log(sum+Number(num));
            return sum+Number(num);
        },0);
        n = (n+'').split('');
        if(n.length===1)
            break;
    }
    return Number(n);
}
digital_root(456);
digital_root(7);


