let result = '';
let str = 'kimjaewon';
// while (true) {
//     if (str.length === 1) {
//         result += str;
//         break;
//     }

//     const strArr = str.split('');
//     result += String(strArr.pop());

//     str = strArr.join('');
// }

function sol(str) {
    if (str.length === 1) return str;
    const strArr = str.split('');

    return str[str.length - 1] + sol(strArr.slice(0, strArr.length - 1).join(''));
}

console.log(sol(str));
