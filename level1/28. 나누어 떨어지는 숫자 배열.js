const arr = [3, 2, 6];
const divisor = 10;

function solution(arr, divisor) {
    const done = arr.sort((a, b) => (a > b ? 1 : -1)).filter(e => e % divisor === 0);

    return done.lenght > 0 ? done : [-1];
}

console.log(solution(arr, divisor));
