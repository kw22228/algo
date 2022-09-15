const str = 'StuDY';

function solution(str) {
    return str
        .split('')
        .map(s => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()))
        .join('');
}

console.log(solution(str));
