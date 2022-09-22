const arr = [13, 5, 11, 7, 23, 15];

function solution(arr) {
    const len = arr.length;
    // let count = 0;
    // while (true) {
    //     for (let i = 0; i < len - 1; i++) {
    //         if (arr[i] > arr[i + 1]) {
    //             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    //             count++;
    //         }
    //     }

    //     if (count === 0) return arr;
    //     count = 0;
    // }

    //한번 버블정렬을 할때마다 맨뒤에 큰수가 쌓이기때문에 len - i 만큼 탐색
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(solution(arr));
