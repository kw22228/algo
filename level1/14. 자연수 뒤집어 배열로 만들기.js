const n = 12345;

function solution(n) {
    return n
        .toString()
        .split('')
        .reverse()
        .map(n => parseInt(n));
}

console.log(solution(n));
