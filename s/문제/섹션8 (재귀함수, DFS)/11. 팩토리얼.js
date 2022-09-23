const n = 5;

function solution(n) {
    function DFS(v) {
        if (v === 0) return 1;

        return v * DFS(v - 1);
    }

    return DFS(5);
}

console.log(solution(n));
