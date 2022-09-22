const n = 7;

function solution(n) {
    const dy = Array.from({ length: n }, () => 0);

    dy[0] = 1;
    dy[1] = 2;

    for (let i = 2; i < dy.length; i++) {
        dy[i] = dy[i - 2] + dy[i - 1];
    }

    return dy[dy.length - 1];
}

console.log(solution(n));
