const s = 'pPoooyY';

function solution(s) {
    const p = [...s.matchAll(/p/gi)].length;
    const y = [...s.matchAll(/y/gi)].length;

    return p === y;
}

console.log(solution(s));
