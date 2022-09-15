const str = 'KoreaTimeGood';

function solution(str) {
    // return str.split('').filter(s => s.charCodeAt() >= 65 && s.charCodeAt() <= 90).length;
    return str.split('').filter(s => s.toUpperCase() === s).length;
}

console.log(solution(str));
