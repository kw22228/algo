function solution(n, r) {
    //메모이제이션 dynamic array
    const dy = Array.from({ length: 35 }, () => Array(35).fill(0));

    function DFS(n, r) {
        if (dy[n][r] > 0) return dy[n][r];
        if (r === 0 || n === r) return 1;
        else {
            dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
            return dy[n][r];
        }
    }

    return DFS(n, r);
}

console.log(solution(33, 19));
