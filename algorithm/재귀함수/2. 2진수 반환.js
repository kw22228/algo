/*
    2    11    1
    2     5    1     ->     1011
    2     2    0
          1
*/

let result = '';
let n = 11;
while (true) {
    if (n % 2 === 0) {
        result += '0';
    } else {
        result += '1';
    }

    n = Math.floor(n / 2);

    if (n === 1 || n === 0) {
        result += String(n);
        break;
    }
}
result = result.split('').reverse().join('');
console.log(result);

// ------------------------------------------------------
let n2 = 11;
function sol(n) {
    if (n === 1 || n === 0) return String(n);

    return sol(Math.floor(n / 2)) + String(n % 2);
}

console.log(sol(n2));
