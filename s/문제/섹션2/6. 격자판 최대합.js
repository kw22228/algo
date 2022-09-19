let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];

function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;

    let sumRow = 0;
    let sumColumn = 0;

    const row = [];
    const column = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sumRow += arr[i][j];
            sumColumn += arr[j][i];
        }

        row.push(sumRow);
        sumRow = 0;

        column.push(sumColumn);
        sumColumn = 0;
    }

    let sumCross1 = 0;
    let sumCross2 = 0;
    for (let i = 0; i < n; i++) {
        sumCross1 += arr[i][i];
        sumCross2 += arr[i][n - 1 - i];
    }

    return Math.max(...row, ...column, sumCross1, sumCross2);
}

console.log(solution(arr));
