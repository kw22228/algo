const str = 'BANANA';

function solution(str) {
    // return str.replaceAll('A', '#');

    return str
        .split('')
        .map(s => (s === 'A' ? '#' : s))
        .join('');
}

console.log(solution(str));
