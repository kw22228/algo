const arr = [23, 87, 65, 12, 57, 32, 99, 81];
const s = 32;

function solution(arr, s) {
    // return arr.sort((a, b) => a - b).indexOf(s) + 1;

    //이분 탐색
    arr.sort((a, b) => a - b);
    let lp = 0;
    let rp = arr.length - 1;

    while (lp <= rp) {
        let mid = parseInt((lp + rp) / 2, 10);
        if (arr[mid] === s) return mid + 1;
        else if (arr[mid] > s) rp = mid - 1;
        else lp = mid + 1;
    }
}

console.log(solution(arr, s));
