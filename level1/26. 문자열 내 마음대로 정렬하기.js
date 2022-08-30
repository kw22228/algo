const strings = ['b', 'a', 'c'];
const n = 2;

function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        else return a > b ? 1 : -1;
    });
}

console.log(solution(strings, n));
