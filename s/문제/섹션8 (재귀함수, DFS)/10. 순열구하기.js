const arr = [3, 6, 9];
const m = 2;

function solution(arr, m) {
    const answer = [];
    const len = arr.length;

    const ch = Array.from({ length: len }, () => 0);
    const tmp = Array.from({ length: m }, () => 0);

    function DFS(v) {
        if (v === m) {
            answer.push(tmp.slice());
        } else {
            for (let i = 0; i < len; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1;
                    tmp[v] = arr[i];
                    DFS(v + 1);
                    ch[i] = 0;
                }
            }
        }
    }

    DFS(0);

    return answer;
}

console.log(solution(arr, m));
