const s = '';

function solution(s) {
    return !s.split('').find(e => Number.isNaN(parseInt(e))) && (s.length === 4 || s.length === 6);
}

console.log(solution(s));
