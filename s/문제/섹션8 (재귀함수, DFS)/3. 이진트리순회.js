const n = 1;

function solution(n) {
    let answer = '';
    function DFS(v) {
        if (v > 7) return;

        DFS(v * 2);
        DFS(v * 2 + 1);
        answer += v;
    }

    DFS(1);

    return answer;
}

console.log(solution(n));
