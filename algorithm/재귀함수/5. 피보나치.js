/*
    피보나치 순열 전전항과 전항을 더한값을 return
    1 1 2 3 5 8 

    5
    f(5)
    f(f(4) + f(3))
    f(f(3) + (f(2))  +  f(2) + f(1))
*/

let a = 1;
let b = 1;

for (let i = 0; i < 5; i++) {
    let c = a + b;
    a = b;
    b = c;
}

console.log(a, b);

function pibonacchi(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    return pibonacchi(n - 1) + pibonacchi(n - 2);
}

console.log(pibonacchi(5));
