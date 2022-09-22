let arr = [1, 2, 8, 4, 9];
const n = 3;

function solution(arr, n) {
    let answer = 0;
    const len = arr.length;

    function count(arr, mid) {
        let count = 1;
        let ep = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - ep >= mid) {
                count++;
                ep = arr[i];
            }
        }
    }

    arr.sort((a, b) => a - b);

    let lt = 1;
    let rt = arr[len - 1];

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2, 10);
        if (count(arr, mid) >= n) {
            answer = mid;
            lt = mid + 1;
        } else rt = mid - 1;
    }

    return answer;
}

console.log(solution(arr, n));
