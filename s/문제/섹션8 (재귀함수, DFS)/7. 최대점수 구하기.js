let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
const timeout = 20;

function solution(ps, pt, timeout) {
    let answer = Number.MIN_SAFE_INTEGER;
    const len = ps.length;

    function DFS(v, sum, sec) {
        if (sec > timeout) return;
        if (v === len) {
            answer = Math.max(answer, sum);
        } else {
            DFS(v + 1, sum + ps[v], sec + pt[v]); //포함 할때,
            DFS(v + 1, sum, sec); //포함 안 할때,
        }
    }

    DFS(0, 0, 0);

    return answer;
}

console.log(solution(ps, pt, timeout));
