const str = 'itisTimeToStudy';

function solution(str) {
    return str
        .split('')
        .map(s => s.toUpperCase())
        .join('');
}

console.log(solution(str));
