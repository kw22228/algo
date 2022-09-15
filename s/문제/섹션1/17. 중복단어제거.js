const str = ['good', 'time', 'good', 'time', 'student'];

function solution(str) {
    return str.reduce((pre, cur) => (pre.indexOf(cur) !== -1 ? pre : [...pre, cur]), []);
}

console.log(solution(str));
