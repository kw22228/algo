const n = 4;
const f = 16;

function solution(n, f) {
    let answer;
    let flag = true;
    let dy = Array.from({ length: 11 }, () => Array(11).fill(0));
    let ch = Array.from({ length: n + 1 }, () => 0);
    let tmp = Array.from({ length: n }, () => 0);
    let b = Array.from({ length: n }, () => 0);

    function combi(n, r) {
        if (dy[n][r] > 0) return dy[n][r];
        if (n === r || r === 0) return 1;
        else {
            dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r);
            return dy[n][r];
        }
    }

    function DFS(v, sum) {
        if (!flag) return;
        if (v === n || sum === f) {
            answer = tmp.slice();
            flag = false;
        } else {
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1;
                    tmp[v] = i;
                    DFS(v + 1, sum + b[v] * tmp[v]);
                    ch[i] = 0;
                }
            }
        }
    }

    //메모이제이션
    for (let i = 0; i < n; i++) {
        b[i] = combi(n - 1, i);
    }
    DFS(0, 0);

    return answer;
}

console.log(solution(n, f));
