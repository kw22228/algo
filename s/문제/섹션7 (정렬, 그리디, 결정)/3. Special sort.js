const arr = [1, 2, 3, -3, -2, 5, 6, -6];

function solution(arr) {
    // const p = [];
    // const m = [];

    // arr.forEach(x => {
    //     if (x > 0) p.push(x);
    //     else m.push(x);
    // });

    // return [...m, ...p];

    //버블정렬을 이용한 풀이
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(solution(arr));
