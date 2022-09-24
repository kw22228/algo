const n = 5; //정점의 수
const arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];

// 1 -> 5번 까지 가는 가지수
function solution(n, arr) {
    let answer = 0;
    const len = arr.length;

    //인접행렬
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }

    const ch = Array.from({ length: n + 1 }, () => 0);
    const path = [];

    function DFS(v) {
        if (v === n) {
            answer++;
            console.log(path);
        } else {
            for (let i = 1; i <= n; i++) {
                if (graph[v][i] === 1 && ch[i] === 0) {
                    ch[i] = 1;
                    path.push(i);
                    DFS(i);
                    ch[i] = 0;
                    path.pop();
                }
            }
        }
    }

    path.push(1);
    ch[1] = 1;
    DFS(1);

    return answer;
}

console.log(solution(n, arr));
