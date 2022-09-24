const arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];

function solution(arr) {
    let answer = 0;
    const len = arr.length;

    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    function DFS(x, y) {
        //도착 했을때 (6, 6)
        if (x === len - 1 && y === len - 1) {
            answer++;
        } else {
            for (let i = 0; i < dx.length; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                if (nx >= 0 && nx < len && ny >= 0 && ny < len && arr[nx][ny] === 0) {
                    arr[nx][ny] = 1;
                    DFS(nx, ny);
                    arr[nx][ny] = 0;
                }
            }
        }
    }

    arr[0][0] = 1; //시작지점
    DFS(0, 0);

    return answer;
}

console.log(solution(arr));
