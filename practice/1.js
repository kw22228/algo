const v = [
    [1, 4],
    [3, 4],
    [3, 10],
];

function solution(v) {
    return [v[0][0] ^ v[1][0] ^ v[2][0], v[0][1] ^ v[1][1] ^ v[2][1]];
}

console.log(solution(v));
