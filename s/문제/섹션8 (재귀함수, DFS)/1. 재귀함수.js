const n = 3;

function solution(n) {
    function DFS(L) {
        if (L === 0) return;
        else {
            DFS(L - 1);
            console.log(L);
        }
    }

    return DFS(n);
}

console.log(solution(n));
