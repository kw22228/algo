const str = 'found7, time: study; Yduts; emit, 7Dnuof';

function solution(str) {
    const newStr = str.toLowerCase().replace(/[^a-z]/g, '');

    return newStr === newStr.split('').reverse().join('');
}

console.log(solution(str));
