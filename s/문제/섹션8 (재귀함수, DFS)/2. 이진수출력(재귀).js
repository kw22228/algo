const n = 11;
function solution(n) {
    function DFS(L) {
        if (L === 0) return '';

        const a = parseInt(L / 2, 10);
        const b = L % 2;

        return DFS(a) + String(b);
    }

    return DFS(n);
}

console.log(solution(n));
