const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const n = 3;

function solution(arr, n) {
    // const answer = [];
    // const len = arr.length;

    // for (let i = 0; i < len - n + 1; i++) {
    //     let sum = 0;

    //     for (let j = i; j < i + n; j++) {
    //         sum += arr[j];
    //     }

    //     answer.push(sum);
    // }

    // return Math.max(...answer);

    let answer = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    answer = sum;

    for (let i = n; i < arr.length; i++) {
        sum += arr[i] - arr[i - n];

        answer = Math.max(answer, sum);
    }

    return answer;
}

console.log(solution(arr, n));
