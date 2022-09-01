const arr = [1, 1, 3, 3, 0, 1, 1];
const arr2 = [4, 4, 4, 3, 3];

function solution(arr) {
    return arr.filter((e, i, arr) => (i === 0 ? true : e !== arr[i - 1]));
}

console.log(solution(arr2));
