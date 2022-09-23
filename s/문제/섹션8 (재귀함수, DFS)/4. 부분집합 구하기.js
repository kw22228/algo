const n = 3;

function solution(n) {
    const answer = [];
    const ch = Array.from({ length: n + 1 }, () => 0);

    function DFS(v) {
        if (v > n) {
            const tmp = [];
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 1) tmp.push(i);
            }
            if (tmp.length > 0) answer.push(tmp);
        } else {
            ch[v] = 1; //포함 할때,
            DFS(v + 1);

            ch[v] = 0; //포함 하지 않을때,
            DFS(v + 1);
        }
    }

    DFS(1);
    return answer;
}

console.log(solution(n));
