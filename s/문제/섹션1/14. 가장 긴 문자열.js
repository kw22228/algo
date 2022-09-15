const str = ['teacher', 'time', 'student', 'beautiful', 'good', 'aaaaaaaaaa'];

function solution(str) {
    return str.reduce((pre, cur) => (pre.length < cur.length ? cur : pre), '');
}

console.log(solution(str));
