const str = 'COMPUTERPROGRAMMING';
const c = 'R';
function solution(str, c) {
    return str.split('').filter(s => s === c).length;
}

console.log(solution(str, c));
