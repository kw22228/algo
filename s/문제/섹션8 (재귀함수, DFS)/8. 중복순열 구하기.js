function solution(a, b) {
    let answer = [];
    let tmp = Array.from({ length: b }, () => 0);

    function DFS(v) {
        if (v === b) {
            answer.push(tmp.slice());
        } else {
            for (let i = 1; i <= a; i++) {
                tmp[v] = i;
                DFS(v + 1);
            }
        }
    }

    DFS(0);

    return answer;
}

console.log(solution(3, 2));
