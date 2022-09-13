var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

function solution(input) {
    const [a, b] = input;
    return parseInt(a) / parseInt(b);
}

console.log(solution(input));
