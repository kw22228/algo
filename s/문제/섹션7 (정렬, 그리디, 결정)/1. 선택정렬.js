const arr = [13, 5, 11, 7, 23, 15];

function solution(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let idx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[idx] > arr[j]) idx = j;
        }

        //자리 바꾸기
        // const tmp = arr[i];
        // arr[i] = arr[idx];
        // arr[idx] = tmp;
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }

    return arr;
}

console.log(solution(arr));
