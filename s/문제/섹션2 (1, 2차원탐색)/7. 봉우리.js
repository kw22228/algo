let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];

function solution(arr) {
    // const len = arr.length;
    // const bong = [];

    // for (let i = 0; i < len; i++) {
    //     for (let j = 0; j < len; j++) {
    //         const current = arr[i][j];

    //         const top = i > 0 ? arr[i - 1][j] : 0;
    //         const bottom = i < len - 1 ? arr[i + 1][j] : 0;
    //         const left = j > 0 ? arr[i][j - 1] : 0;
    //         const rigth = j < len - 1 ? arr[i][j + 1] : 0;

    //         if (current > Math.max(top, bottom, left, rigth)) bong.push(current);
    //     }
    // }

    // return bong.length;
    let answer = 0;
    const len = arr.length;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let flag = true;

            for (let k = 0; k < dx.length; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];

                if (nx >= 0 && nx < len && ny >= 0 && ny < len && arr[nx][ny] >= arr[i][j]) {
                    flag = false;
                    break;
                }
            }

            if (flag) answer++;
        }
    }

    return answer;
}

console.log(solution(arr));
