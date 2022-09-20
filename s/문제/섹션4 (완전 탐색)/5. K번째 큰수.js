const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
const n = 3;
function solution(arr, n) {
    const sumArr = [];
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                const sum = arr[i] + arr[j] + arr[k];
                sumArr.push(sum);
            }
        }
    }

    return [...new Set(sumArr)].sort((a, b) => b - a)[n - 1];
}

console.log(solution(arr, n));
