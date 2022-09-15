const str = 'ksekkset';
function solution(str) {
    return str.split('').reduce((pre, cur) => (pre.indexOf(cur) !== -1 ? pre : pre + cur), '');
}

console.log(solution(str));
