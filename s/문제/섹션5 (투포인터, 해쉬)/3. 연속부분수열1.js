/*
    lt => left
    rt => rigth

    rt가 증가할때는 sum += arr[rt];
    lt가 증가할대   sum -= arr[lt];
*/
const arr = [1, 2, 1, 3, 1, 1, 1, 2];
const n = 6;

function solution(arr, n) {
    // let answer = 0;
    // let p1 = 0;
    // let p2 = 0;
    // let sum = 0;
    // while (p1 < arr.length - 1 && p2 < arr.length - 1) {
    //     sum += arr[p2];
    //     if (sum < n) p2++;
    //     else {
    //         if (sum === n) answer++;
    //         sum = 0;
    //         p1++;
    //         p2 = p1;
    //     }
    // }
    // return answer;

    let answer = 0;
    let sum = 0;
    let lt = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum === n) answer++;
        while (sum >= n) {
            sum -= arr[lt++];
            if (sum === n) answer++;
        }
    }
    return answer;
}

console.log(solution(arr, n));
