let n = '123123';
let sum = 0;

// while (true) {
//     if (n.length === 1) {
//         sum += parseInt(n);
//         break;
//     }

//     const splitN = n.split('');
//     sum += parseInt(splitN.shift());

//     n = splitN.join('');
// }

function sol(n) {
    if (n.length === 1) return parseInt(n, 10);
    const splitN = n.split('');

    return parseInt(splitN.shift(), 10) + sol(splitN.join(''));
}

console.log(sol(n));
