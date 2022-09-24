const r = 4;
const n = 2;

function solution(r, n) {
    const answer = [];
    const tmp = Array.from({ length: n }, () => 0);

    function DFS(v, s) {
        if (v === n) {
            answer.push(tmp.slice());
        } else {
            for (let i = s; i <= r; i++) {
                tmp[v] = i;
                DFS(v + 1, i + 1);
            }
        }
    }

    DFS(0, 1);
    return answer;
}

console.log(solution(r, n));
