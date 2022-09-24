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

    //인접리스트
    const graph = Array.from({ length: n + 1 }, () => Array());
    for (let [a, b] of arr) {
        graph[a].push(b);
    }

    //체크
    const ch = Array.from({ length: n + 1 }, () => 0);
    const path = [];

    function DFS(v) {
        if (v === n) {
            answer++;
        } else {
            for (let x of graph[v]) {
                if (ch[x] === 0) {
                    ch[x] = 1;
                    path.push(x);
                    DFS(x);
                    ch[x] = 0;
                    path.pop();
                }
            }
        }
    }

    ch[1] = 1;
    path.push(1);
    DFS(1);

    return answer;
}

console.log(solution(n, arr));
