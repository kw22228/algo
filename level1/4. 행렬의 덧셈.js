const arr1 = [
    [1, 2],
    [2, 3],
];

const arr2 = [
    [3, 4],
    [5, 6],
];

function solution(arr1, arr2) {
    return arr1.reduce((cur, a, i) => [...cur, a.map((b, j) => b + arr2[i][j])], []);
}

console.log(solution(arr1, arr2));
