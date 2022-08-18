const n = 987;

function solution(n) {
    return n
        .toString()
        .split('')
        .reduce((cur, n) => (cur += parseInt(n)), 0);
}

console.log(solution(n));
