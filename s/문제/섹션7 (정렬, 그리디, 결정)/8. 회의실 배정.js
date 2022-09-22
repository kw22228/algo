const arr = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
];

function solution(arr) {
    // let answer = 0;
    // const len = arr.length;
    // for (let i = 0; i < len; i++) {
    //     let end = Number.MIN_SAFE_INTEGER;
    //     let count = 0;
    //     for (let j = i; j < len; j++) {
    //         if (arr[j][0] >= end) {
    //             end = arr[j][1];
    //             count++;
    //         }
    //     }
    //     answer = Math.max(answer, count);
    // }
    // return answer;

    //정렬을 통해 (회의가 끝나는 시간 기준)
    let answer = 0;
    arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

    let end = 0;
    arr.forEach(x => {
        if (x[0] >= end) {
            end = x[1];
            answer++;
        }
    });

    return answer;
}

console.log(solution(arr));
